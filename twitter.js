var config = require('./config/config');
var Twit = require('twit');
var T = new Twit(config);

// posting a new tweet
//T.post('statuses/update', { status: 'hello world! thirteenth tweet :D' }, function(err, data, response) {
//    console.log(data)
//  });

// retweet the tweet with given tweet ID
//T.post('favorites/destroy', { id: '983210959811633152' }, function (err, data, response) {
//    console.log(data)
//  })
//  
//// retweet the tweet with given tweet ID
//T.post('statuses/destroy/:id', { id: '983210959811633152' }, function (err, data, response) {
//    console.log(data.id)
//  })
//
//// get details of a tweet with it's tweet id
T.get('statuses/show/:id', { id: '983497916131233792' }, function (err, data, response) {
 //   console.log("the tweet text is: ",data.text);
//    console.log("the tweet favorite count is: ",data.favorite_count);
//    console.log("the tweet is liked?: ",data.favorited);
//    console.log("the tweet retweet count is: ",data.retweet_count);
    console.log("the tweeted user name: ",data);
//    console.log("the tweet url is: "+"https://twitter.com/"+data.user.screen_name+"/status/"+data.id_str);
  });
//
//var direct_message = {
//        event: {
//          type: 'message_create',
//          message_create: {
//            target: { recipient_id: '1478790870' },
//            message_data: { text: 'This is a second message!' }
//          }
//        }
//      }
//
//// Sending a message to a user with user id
//T.post('direct_messages/events/new', direct_message, function (err, data, response) {
//    console.log(data)
//  });
//
//// getting private messages of a user
//T.get('direct_messages',function (err, data, response) {
//    console.log("the messages are: ",data);
//  });
//
//

   