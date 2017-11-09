// configuration of auth.js

// expose this configuration directly to yempo application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '1983707671915939', // Facebook App ID
        'clientSecret'    : 'e385cc141d50844b9fb31703fbf8cb46', // Facebook App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'

    },

    'twitterAuth' : {
        'consumerKey'        : 'your-consumer-key-here',
        'consumerSecret'     : 'your-client-secret-here',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    }
};
