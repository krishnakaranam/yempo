var Twit = require('twit');
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

	function printAllMutualFollowers(screenName1, screenName2, followersOfUser1, followersOfUser2, mutual){
		
		T.get('followers/ids', 
				{ screen_name: screenName1, count: 5000 },  
				function getData(err, data, response) {
				if (err) {
					console.log(err);
					}
				
				var followersUser1 = data;
				followersOfUser1 = followersOfUser1.concat(followersUser1.ids);

				if(followersUser1.next_cursor > 0){
				  T.get('followers/ids', { screen_name: screenName1, count: 5000, cursor: followersUser1.next_cursor_str }, getData);
				} else {
					console.log("length is "+followersOfUser1.length);
					console.log("followers of user 1 is "+followersOfUser1);
				}
				});
				
		T.get('followers/ids', 
				{ screen_name: screenName2, count: 5000 },  
				function getData(err, data, response) {
				if (err) {
					console.log(err);
					}
				
				var followersUser2 = data;
				followersOfUser2 = followersOfUser2.concat(followersUser2.ids);
        
				if(followersUser2.next_cursor > 0){
				  T.get('followers/ids', { screen_name: screenName2, count: 5000, cursor: followersUser2.next_cursor_str }, getData);
				} else {
					console.log("length is "+followersOfUser2.length);
					console.log("followers of user 2 is "+followersOfUser2);
		 		}
		 		});
				
		printer(followersOfUser1,followersOfUser2);
				
	}
	
	function remove(array, element) {
		const index = array.indexOf(element);
		array.splice(index, 1);
	}
	
	//printAllMutualFollowers(screenName1, screenName2, followersOfUser1, followersOfUser2, mutual);
	
	
	function printer(followersOfUser1,followersOfUser2){
		
		for (var i = 0; i < followersOfUser1.length; i++) {
						remove(followersOfUser2,followersOfUser1[i]);
				}
				
				console.log("length of array 1 is "+followersOfUser1.length);
				console.log("removed array 2 length is "+followersOfUser2.length);
	}

var myMap = new Map();

var keyString = 'a string',
    keyObj = {},
    keyFunc = function() {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

console.log("size of the map is "+myMap.size);


