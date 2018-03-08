var graph = require('fbgraph');

// Access token of the user generated when the user grants permission to our app.
var access_token = 'EAACWdBCCvw8BADvZBYeCZBxZCkz3EkLyvBj9ff1ZB4yrMdVfoSqqe6vjs5ZCkc143yVewyuUZCCyUnnApcKf02k5c1gXVLhUWFBgZAcg6dysiFWZAWOet33KDKxFNdp89w6LwkNrvZCkkNCVNONFG4UGaZAYQUfAvszqzZAdDMpBiGCm9SKCnbWpgfEo8AT8KmfBi4ZD';

// test user access token
// EAAcMKZB8fbaMBALnjwNIeZAIZCPkh1w1ZAfxhZCWZAH6qk4lUaeaJ6KTSqxgGoc2p8MbMBg7zEmM4xNZCRmlWyNA0WRszW0ZAZBAFGqqQQvG9HzqJ92dwmxZCPqL5nC9ZBleLTdb7EUJkUT5IztZBwS5iqhJZB9mhZB0NHANs1SSA1azR53ZBHKWoGReU3tNnwtib8myarto8xQtFNivBH7dfRCxmPMxLVPiFdZC1dknPj9dnQ1ZB7QZDZD

// app id
var client_id = '1983707671915939';

// app secret
var client_secret = 'e385cc141d50844b9fb31703fbf8cb46';

// setting the access token for the FBgraph node js module
graph.setAccessToken(access_token);

// options for extending the user access toke
var extend = {
    "access_token":   access_token,
    "client_id":      client_id,
    "client_secret":  client_secret
};

// extending the access token of the user
graph.extendAccessToken(extend, function (err, res) {
    console.log('extend access token:');
    console.log(res);
});

// options to get a facebook post likes
var likeOptions = {
    limit: 500, 
    access_token: access_token
};

var likeData = [];

// Get likes of a facebook post
graph.get('/10202180078063572/likes', likeOptions, function(err, res) {
    likeData = likeData.concat(res.data);
    if(res.paging && res.paging.next) {
      graph.get(res.paging.next, function(err, res) {
        likeData = likeData.concat(res.data);
      });
    }
    console.log("number of likes: "+ likeData.length);
    console.log("like data is in the format: ", likeData[0]);
  });

// options for getting the profile picture of the user
var params = { fields: "cover,email,about,languages,name" };

// get request to get the profile picture of the user
graph.get("/10207905751521830", params,  function(err, res) {
    console.log('user details:');
    console.log(res);
});

// post id
var postID = '/10202180078063572';
var postParams = { fields: "shares" };

// get request to get the post details using a post id
graph.get(postID ,function(err, res) {
    console.log("post:");
    console.log(res);
  });

// post id
postID = '/10202180078063572/sharedposts';

// get request to get the post details using a post id
graph.get(postID, function(err, res) {
    console.log("shares:");
    console.log(res);
  });

// options for posting on facebook, message option is for text of the post.
var wallPost = {
    message: "This is a test of FBgraph node js module"
};

//page-id/feed
// the main post request with predefined options
graph.post("/feed", wallPost, function(err, res) {
    console.log("feed:");
    console.log(res);
});
