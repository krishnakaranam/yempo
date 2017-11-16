var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);
var userId = 2491834933;

var params = { 
    q: 'krishna', 
    count: 2
  }
  

// searching for a user based on name or user id

  T.get('users/search', params, gotUser); 
  
  function gotUser(err, data, response) {
    var user = data;
    console.log('user data is '); 
    console.log(user);
    //console.log(data[0].id);
    for (var i = 0; i < user.length; i++) {
      console.log(user[i].id);  	
    }
  }

// create and post a tweet from the user who authenticated the application

var tweet = {
    status: '#youthEmpowerment from yempo 8'
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





