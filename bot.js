var Twit = require('twit');
var Q = require('q');
 
var config = require('./config/config');

var T = new Twit(config);

var userId = 867980940127068200;

var params = { 
    q: 'krishnakaranam', 
    count: 2
  }
  

// searching for a user based on name or user id

//T.get('users/search', params, gotUser); 

function gotUser(err, data, response) {
  var user = data;
  //console.log('user id is '); 
  //console.log(user);
  //console.log(data[0].id);
  for (var i = 0; i < user.length; i++) {
    //console.log(user[i].id);  	
  }
}


// searching for friends/followers of the user based on name or user id

var screenName = 'krishnakaranam3';

var parameters = { 
  screen_name: 'NjaYaTeng', 
  count: 200,
  cursor: -1
}

//T.get('followers/list', parameters, gotList); 

//function gotList(err, data, response) {
  //var followerList = data;
  //console.log('followers data is '); 
  //console.log(followerList);
  //console.log('followers data length is '); 
  //console.log(followerList.users.length);
  //console.log('next cursor is ');
  //console.log(followerList.next_cursor);
  //cursor = followerList.next_cursor;
  //console.log(data[0].id);
  
  //for (var i = 0; i < user.length; i++) {
  //  console.log(user[i].id);  	
  //}
//}

var number = 0;
var followers = [];

getAllFollowers(screenName, followers);

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
							return followers
						}
					}
				});
	}
	
	function sortit(a,b){
		return(b.followers_count - a.followers_count)
	}
	
console.log('total........ number output is of ');

// create and post a tweet from the user who authenticated the application

var tweet = {
    status: '#youthEmpowerment from yempo 19'
  }
  //T.post('statuses/update', tweet, tweeted);
  
  function tweeted(err, data, response) {
    if (err) {
        console.log(err);
    } else {
      console.log('tweet data is ');
      console.log(data);
    }
  }


// getting each of the users friends and displaying the number of friends of each of user's friends  
// rate limiting of twitter is limiting us to get only 15 friends per user

// will be working on optimizations to increase this limit.

//loopFollowers(userId);

function loopFollowers(userId) {
    T.get('followers/ids', { user_id: userId },  function (err, data, response) {
        if (err) {
            console.log(err);
        } else {
        var list = data.ids;
        console.log(userId);
        console.log(list.length);
        for (var i = 0; i < list.length; i++) {
            T.get('followers/ids', { user_id: list[i] },  function (err, dataFollowers, response) {
                if (err) {
                    console.log(err);
                } else {
                var followersList = dataFollowers.ids;
                console.log(list[i]);
                console.log(followersList.length);
            }
            });  	
        }
      }
    });
  }


//Gateway to the outside network:
var mutual = 0;
var screenName1 = 'NjaYaTeng';
var screenName2 = 'niteshtiwari22';
var followersOfUser1 = [];
var followersOfUser2 = [];

// function to get all the follower Id's of a user with screenname
	var getFollowerIds =  function(screenName ,followersOfUser){
		var deferred  = Q.defer();
		
		T.get('followers/ids', 
			{ screen_name: screenName, count: 5000 },  
			function getData(err, data, response) {
				if (err) {
					console.log(err);
				}
			
				var followersUser = data;
				followersOfUser = followersOfUser.concat(followersUser.ids);
	
				if(followersUser.next_cursor > 0){
				T.get('followers/ids', { screen_name: screenName, count: 5000, cursor: followersUser.next_cursor_str }, getData);
				} else {
					deferred.resolve(followersOfUser);
				}
			});
		
		return deferred.promise;
	}

// Function to splice the array
	function remove(array, element) {
		const index = array.indexOf(element);
		array.splice(index, 1);
	}
	
// Function to print the contents of the array passed
	function printer(followersOfUser){
		for (var i = 0; i < followersOfUser.length; i++) {
				console.log(followersOfUser[i]);
			}
	}
	
// Function to remove the mutual friends of the array 2
	function removeMutual(followersOfUser1,followersOfUser2){
		for (var i = 0; i < followersOfUser1.length; i++) {
			remove(followersOfUser2, followersOfUser1[i]);
		}
	}
	
// Function to sort the 2d array of screen_name and removeMutual lengths
// Example usage : array.sort(sortForGateway);
	function sortForGateway(a, b) {
		if (a[1] === b[1]) {
			return 0;
		}
		else {
			return (a[1] < b[1]) ? -1 : 1;
		}
	}
	
// Using promises to ensure the flow of the functions called
	getFollowerIds(screenName1 ,followersOfUser1)
      .then(function(data){
		 followersOfUser1 = data;
      })
	  .then(
		getFollowerIds(screenName2 ,followersOfUser2)
		.then(function(data){
         followersOfUser2 = data;
		 console.log(followersOfUser2.length);
		})
		.then(function(){
		  removeMutual(followersOfUser1, followersOfUser2);
		  console.log("after");
		  console.log(followersOfUser2.length);
		})
	  );
	
	
// Functions to be written :
// 
//   Function gatewayToOutside()
//		Create Hashmap and
//		for each of User's followers
//		 put -> key = follower screen_name and -> value = length of removeMutual array
//	
//		for each entry of the map
//		 copy each entry to the gatewayArray (2d array)
//
//		sortForGateway -> use this function to sort this array
//
//		return this array to the front-end

var gatewayArray = [][];

// function gatewayToOutside
	var gatewayToOutside =  function(followerList){
		var deferred  = Q.defer();
		
		var gatewayMap = new Map();
		
		for (var i = 0; i < followerList.length; i++) {
			var length;
			var followerFollowers[];
			getFollowerIds(followerList[i].screen_name,followerFollowers)
			.then(function(data){
				followerFollowers = data;
				console.log(followerFollowers.length);
			})
			.then(function(){
				removeMutual(followersOfUser1, followerFollowers);
				console.log("after");
				console.log(followerFollowers.length);
				length = followerFollowers.length;
			})
			
			gatewayMap.set(followerList[i].screen_name, length);
		}
		
		// map foreach 
		// add into gatewayArray
		
		gatewayArray.sort(sortForGateway);
		deferred.resolve(gatewayArray);
		
		return deferred.promise;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
// testing maps and promises
var myMap = new Map();

var getPromise = function(i){
	var deferred  = Q.defer();
	
	var result = i+1;
	deferred.resolve(result);
	
	return deferred.promise;
}

	getPromise(21)
	.then(function(data){
		console.log(data);
	});


var keyString = 'a string',
    keyObj = {},
    keyFunc = function() {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

console.log("size of the map is "+myMap.size);


