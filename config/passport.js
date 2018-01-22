var LocalStrategy    = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy  = require('passport-twitter').Strategy;

// loading the user model
var User       = require('../app/models/user');

// loading the auth variables
var configAuth = require('./auth');
var config = require('./config');
var Twit = require('twit');
var Q = require('q');
var T = new Twit(config);

module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    },
    function(req, email, password, done) {
        if (email)
            email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching

        // asynchronous
        process.nextTick(function() {
            User.findOne({ 'local.email' :  email }, function(err, user) {
                // if there are any errors, return the error
                if (err)
                    return done(err);

                // if no user is found, return the message
                if (!user)
                    return done(null, false, req.flash('loginMessage', 'No user found.'));

                if (!user.validPassword(password))
                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));

                // all is well, return user
                else
                    return done(null, user);
            });
        });

    }));

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    },
    function(req, email, password, done) {
        if (email)
            email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching

        // asynchronous
        process.nextTick(function() {
            // if the user is not already logged in:
            if (!req.user) {
                User.findOne({ 'local.email' :  email }, function(err, user) {
                    // if there are any errors, return the error
                    if (err)
                        return done(err);

                    // check to see if theres already a user with that email
                    if (user) {
                        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                    } else {

                        // create the user
                        var newUser            = new User();

                        newUser.local.email    = email;
                        newUser.local.password = newUser.generateHash(password);

                        newUser.save(function(err) {
                            if (err)
                                return done(err);

                            return done(null, newUser);
                        });
                    }

                });
            // if the user is logged in but has no local account...
            } else if ( !req.user.local.email ) {
                // ...presumably they're trying to connect a local account
                // BUT let's check if the email used to connect a local account is being used by another user
                User.findOne({ 'local.email' :  email }, function(err, user) {
                    if (err)
                        return done(err);
                    
                    if (user) {
                        return done(null, false, req.flash('loginMessage', 'That email is already taken.'));
                        // Using 'loginMessage instead of signupMessage because it's used by /connect/local'
                    } else {
                        var user = req.user;
                        user.local.email = email;
                        user.local.password = user.generateHash(password);
                        user.save(function (err) {
                            if (err)
                                return done(err);
                            
                            return done(null,user);
                        });
                    }
                });
            } else {
                // user is logged in and already has a local account. Ignore signup. (You should log out before trying to create a new account, user!)
                return done(null, req.user);
            }

        });

    }));

    // =========================================================================
    // FACEBOOK ================================================================
    // =========================================================================
    var fbStrategy = configAuth.facebookAuth;
    fbStrategy.passReqToCallback = true;  // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    passport.use(new FacebookStrategy(fbStrategy,
    function(req, token, refreshToken, profile, done) {

        // asynchronous
        process.nextTick(function() {

            // check if the user is already logged in
            if (!req.user) {

                User.findOne({ 'facebook.id' : profile.id }, function(err, user) {
                    if (err)
                        return done(err);

                    if (user) {

                        // if there is a user id already but no token (user was linked at one point and then removed)
                        if (!user.facebook.token) {
                            user.facebook.token = token;
                            user.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName;
                            user.facebook.email = (profile.emails[0].value || '').toLowerCase();

                            user.save(function(err) {
                                if (err)
                                    return done(err);
                                    
                                return done(null, user);
                            });
                        }

                        return done(null, user); // user found, return that user
                    } else {
                        // if there is no user, create them
                        var newUser            = new User();

                        newUser.facebook.id    = profile.id;
                        newUser.facebook.token = token;
                        newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName;
                        newUser.facebook.email = (profile.emails[0].value || '').toLowerCase();

                        newUser.save(function(err) {
                            if (err)
                                return done(err);
                                
                            return done(null, newUser);
                        });
                    }
                });

            } else {
                // user already exists and is logged in, we have to link accounts
                var user            = req.user; // pull the user out of the session

                user.facebook.id    = profile.id;
                user.facebook.token = token;
                user.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName;
                user.facebook.email = (profile.emails[0].value || '').toLowerCase();

                user.save(function(err) {
                    if (err)
                        return done(err);
                        
                    return done(null, user);
                });

            }
        });

    }));

    // =========================================================================
    // TWITTER HELPER FUNCTIONS ================================================
    // =========================================================================
    
    function getAllFollowers(screenName, followers){
        
            T.get('followers/list', 
                    { screen_name: screenName, count: 200 },  
                    function getData(err, data, response) {
                    if (err) {
                        console.log(err);
                        } else {
                            followers = followers.concat(data.users);
                            
                            if(data.next_cursor > 0){
                              T.get('followers/list', { screen_name: screenName, count: 200, cursor: data.next_cursor_str }, getData);
                            } else {
                                followers.sort(sortit);
                            }
                        }
                    });
        }
        
    function sortit(a,b){
            return(b.followers_count - a.followers_count)
        }
		
	
	// function to get all the follower Id's of a user with screenname
	function getFollowerIds(screenName ,followersOfUser){
		var deferred  = Q.defer();
		
		T.get('followers/ids', 
			{ screen_name: screenName, count: 5000 },  
			function getData(err, data, response) {
				if (err) {
					console.log("error is " +err+ " for screenname "+screenName);
				}
				
				var followersUser = data;
				followersOfUser = followersOfUser.concat(followersUser.ids);
				
				if(followersUser.next_cursor > 0){
				T.get('followers/ids', { screen_name: screenName, count: 5000, cursor: followersUser.next_cursor_str }, getData);
				} else {
					followersOfUser.push(screenName);
					deferred.resolve(followersOfUser);
				}
			});
			
		return deferred.promise;
	}
	
	// Function to remove the mutual friends of the array 2
	function removeMutual(followersOfUser1,followersOfUser2){
		var deferred  = Q.defer();
		for (var i = 0; i < followersOfUser1.length; i++) {
			remove(followersOfUser2, followersOfUser1[i].id);
			//console.log("removing");
		}
		deferred.resolve(followersOfUser2);
		return deferred.promise;
	}
	
	// Function to sort the 2d array of screen_name and removeMutual lengths
	// Example usage : array.sort(sortForGateway);
	function sortForGateway(a, b) {
		if (a.length === b.length) {
			return 0;
		}
		else {
			return (a.length > b.length) ? -1 : 1;
		}
	}
	
	// Function to splice the array
	function remove(array, element) {
		const index = array.indexOf(element);
		array.splice(index, 1);
	}
	
	
	// function to get outside network
	gatewayToOutside = function (followerList){
		var deferred  = Q.defer();
		var myMap = new Map();
		var sc_name;
		
		for (var i = 0; i < followerList.length; i++) {
			var length;
			var followerFollowers = [];
			
			getFollowerIds(followerList[i].screen_name,followerFollowers)
				.then(function(data){
					sc_name = data.pop();
					followerFollowers = data;
					
					removeMutual(followerList, followerFollowers)
						.then(function(data){
							myMap.set(sc_name,data.length);
							
							if(myMap.size == followerList.length){
								deferred.resolve(myMap);
							}
				})
				});
		}
	return deferred.promise;
	}

		gatewayToOutsideArray = function (followerList){
		var deferred  = Q.defer();
		
		gatewayToOutside(followerList)
		.then(function(data){
			
			var gatewayArray = [];
			
			for (var [key, value] of data) {
				var pair = {
					screen_name: key,
					length: value
				};
				gatewayArray.push(pair);
			}
			
			gatewayArray.sort(sortForGateway);
			
			console.log('************ sorted array is ' + JSON.stringify(gatewayArray));
			
		deferred.resolve(gatewayArray);
		return deferred.promise;
		});
		}
	

    // =========================================================================
    // TWITTER =================================================================
    // =========================================================================
    passport.use(new TwitterStrategy({

        consumerKey     : configAuth.twitterAuth.consumerKey,
        consumerSecret  : configAuth.twitterAuth.consumerSecret,
        callbackURL     : configAuth.twitterAuth.callbackURL,
        passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)

    },
    function(req, token, tokenSecret, profile, done) {

        // asynchronous
        process.nextTick(function() {

            // printing profile to check all the fields in the twitter profile given by passport
            //console.log("profile is "+profile);
            
            // check if the user is already logged in
            if (!req.user) {

                User.findOne({ 'twitter.id' : profile.id }, function(err, user) {
                    if (err)
                        return done(err);

                    if (user) {
                        // if there is a user id already but no token (user was linked at one point and then removed)
                        if (!user.twitter.token) {
                            user.twitter.token       = token;
                            user.twitter.username    = profile.username;
                            user.twitter.displayName = profile.displayName;
                            var followers = [];
							var screenName = profile.username;

                            T.get('followers/list', 
							{ screen_name: screenName, count: 200 },  
							function getData(err, data, response) {
							if (err) {
								console.log(err);
							} else {
                            followers = followers.concat(data.users);
                            
                            if(data.next_cursor > 0){
                              T.get('followers/list', { screen_name: screenName, count: 200, cursor: data.next_cursor_str }, getData);
                            } else {
								followers.sort(sortit);
								user.twitter.followers   = followers;
						        user.twitter.followers_count = followers.length;
								
								gatewayToOutsideArray(user.twitter.followers)
								.then(function(data){
									
									user.twitter.gateway = data;
									console.log('************ user.twitter.gateway ' + JSON.stringify(data));
									
									user.save(function(err) {
									if (err)
										return done(err);
                                
									return done(null, user);
								});
									
									
								});
								
                            }
							}
							});
                        }

                        return done(null, user); // user found, return that user
                    } else {
                        // if there is no user, create them
                        var newUser                 = new User();

                        newUser.twitter.id          = profile.id;
                        newUser.twitter.token       = token;
                        newUser.twitter.username    = profile.username;
                        newUser.twitter.displayName = profile.displayName;
                        var followers = [];
						var screenName = profile.username;
						
						T.get('followers/list', 
						{ screen_name: screenName, count: 200 },  
						function getData(err, data, response) {
						if (err) {
							console.log(err);
                        } else {
                            followers = followers.concat(data.users);
                            
                            if(data.next_cursor > 0){
                              T.get('followers/list', { screen_name: screenName, count: 200, cursor: data.next_cursor_str }, getData);
                            } else {
								followers.sort(sortit);
								newUser.twitter.followers = followers;
						        newUser.twitter.followers_count = followers.length;
								console.log('+++++++++++++++++++ newUser.twitter.followers_count ' + JSON.stringify(newUser.twitter.followers_count));
								
								gatewayToOutside(newUser.twitter.followers)
								.then(function(data){
									
									var gatewayArray = [];
									
									for (var [key, value] of data) {
										var pair = {
											screen_name: key,
											length: value
										};
										gatewayArray.push(pair);
									}
									
									gatewayArray.sort(sortForGateway);
									newUser.twitter.gateway   = gatewayArray;
									
									});
								
								newUser.save(function(err) {
									if (err)
										return done(err);
                                
									return done(null, newUser);
								});
								
                            }
                        }
						});
						
                    }
                });

            } else {
                // user already exists and is logged in, we have to link accounts
                var user                 = req.user; // pull the user out of the session

                user.twitter.id          = profile.id;
                user.twitter.token       = token;
                user.twitter.username    = profile.username;
                user.twitter.displayName = profile.displayName;
				var followers = [];
				var screenName = profile.username;

                T.get('followers/list', 
				{ screen_name: screenName, count: 200 },  
				function getData(err, data, response) {
				if (err) {
					console.log(err);
				} else {
                    followers = followers.concat(data.users);
                            
                    if(data.next_cursor > 0){
                      T.get('followers/list', { screen_name: screenName, count: 200, cursor: data.next_cursor_str }, getData);
                    } else {
						followers.sort(sortit);
						user.twitter.followers   = followers;
					    user.twitter.followers_count = followers.length;
						
						gatewayToOutside(user.twitter.followers)
								.then(function(data){
									
									var gatewayArray = [];
									
									for (var [key, value] of data) {
										var pair = {
											screen_name: key,
											length: value
										};
										gatewayArray.push(pair);
									}
									
									gatewayArray.sort(sortForGateway);
									user.twitter.gateway   = gatewayArray;
						
									});
						
						user.save(function(err) {
							if (err)
								return done(err);
                        
							return done(null, user);
						});
						
                    }
					}
					});
            }

        });

    }));

};
