var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for user model
var userSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String,
        followers : {type : Array , default : [] },
        followers_count: {type: Number, default: 0},
        created_at: {type: Date, default: new Date()}
    }
}, {collection: 'User'});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// updating the followers of the user
userSchema.methods.updateFollowers = function(userId, followers) {
    return findOneAndUpdate({ 'twitter.id' :  userId },{ $set: { "twitter.followers" : followers }});
};

// create the model for users and expose it to yempo app
module.exports = mongoose.model('User', userSchema);
