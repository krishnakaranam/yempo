// configuration of auth.js

// expose this configuration directly to yempo application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '1983707671915939', // Facebook App ID
        'clientSecret'    : 'e385cc141d50844b9fb31703fbf8cb46', // Facebook App Secret
        'callbackURL'     : 'https://karanam-saikrishna-webdev.herokuapp.com/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'

    },

    'twitterAuth' : {
        'consumerKey'        : 'd8xfh5N7dCQKG89kZB10OUSin',
        'consumerSecret'     : 'OHKq4wWgQg3pQjoFyHLDBY7EEbO0UCRupgQ6Re7OEQDpuBxje3',
        'callbackURL'        : 'https://karanam-saikrishna-webdev.herokuapp.com/auth/twitter/callback'
    }
};
