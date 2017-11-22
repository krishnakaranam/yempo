var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);
var userId = 867980940127068200;

var params = { 
    q: 'krishnakaranam', 
    count: 2
  }
  

// searching for a user based on name or user id

T.get('users/search', params, gotUser); 

function gotUser(err, data, response) {
  var user = data;
  console.log('user id is '); 
  //console.log(user);
  console.log(data[0].id);
  for (var i = 0; i < user.length; i++) {
    console.log(user[i].id);  	
  }
}


// searching for friends/followers of the user based on name or user id

var cursor = -1;

var screenName = 'NjaYaTeng';

var parameters = { 
  screen_name: 'NjaYaTeng', 
  count: 200,
  cursor: cursor
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



T.get('followers/list', { screen_name: screenName, count: 200 },  function getData(err, data, response) {
  
      if (err) {
          console.log(err);
      }

    // Do stuff here to write data to a file
    var followerList = data;
    console.log('followers data is '); 
    console.log(followerList);
    console.log('followers data length is '); 
    console.log(followerList.users.length);
    number = number + followerList.users.length;
    console.log('total output is of '+ number);
    console.log('next cursor is ');
    console.log(followerList.next_cursor);
  
    if(followerList.next_cursor > 0)
      T.get('followers/list', { screen_name: screenName, count: 200, cursor: followerList.next_cursor_str }, getData);
    });


console.log('total........ number output is of ');

// create and post a tweet from the user who authenticated the application

var tweet = {
    status: '#youthEmpowerment from yempo 19'
  }
  T.post('statuses/update', tweet, tweeted);
  
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





