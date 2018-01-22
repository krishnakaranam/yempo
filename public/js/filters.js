var Twit = require('twit');
var Q = require('q');
 
var config = require('./config');

var T = new Twit(config);

// function to get all the follower Id's of a user with screenname
	exports.getFollowerIds = function (screenName ,followersOfUser){
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
	exports.removeMutual = function (followersOfUser1,followersOfUser2){
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
	exports.sortForGateway = function (a, b) {
		if (a.length === b.length) {
			return 0;
		}
		else {
			return (a.length > b.length) ? -1 : 1;
		}
	}
	
// Function to splice the array
	exports.remove = function (array, element) {
		const index = array.indexOf(element);
		array.splice(index, 1);
	}
	
// calling gateway to the outside function and sorting the array
//	gatewayToOutside(followerList)
//	.then(function(data){
//		
//		var gatewayArray = [];
//		
//		console.log("working");
//		
//		for (var [key, value] of data) {
//			var pair = {
//				screen_name: key,
//				length: value
//			};
//			gatewayArray.push(pair);
//		}
//		
//		gatewayArray.sort(sortForGateway);
//		console.log('array is ' + JSON.stringify(gatewayArray));
//		
//		var result = gatewayArray.map(a => a.screen_name);
//		console.log('array is ' + JSON.stringify(result));
//		
//	});
	
	// function to get outside network
	exports.gatewayToOutside = function (followerList){
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

}