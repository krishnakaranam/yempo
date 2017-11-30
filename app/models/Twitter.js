var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for twitter followers model
var twitterSchema = mongoose.Schema({
	
	followerOf: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    id_str: {type: String, unique: true, required: true},
    name: {type: String},
    screen_name: {type: String},
    followers_count: {type: double, default: 0},
	friends_count: {type: double, default: 0},
	favorites_count: {type: double, default: 0},
	statuses_count: {type: double, default: 0},
	created_at: {type: Date, default: new Date()},
    updated_at: {type: Date, default: new Date()}

}, {collection: 'Twitter'});

// getting all the follower list of a given userId
twitterSchema.methods.findAllFollowers function(userId) {
    return find({'followerOf': userId});
}

// updating each follower of a given userId with most recent data
twitterSchema.methods.updateFollower function(userId, twitterFollower) {
    return findOneAndUpdate({followerOf: userId},{id_str: twitterFollower.id_str}, {$set: twitterFollower});
}

// creating a new follower of a given userId if not already recorded
function createFollower(userId,twitterFollower) {
    return create(twitterFollower);
}

// create the model for twitterFollowers and expose it to yempo app
module.exports = mongoose.model('Twitter', twitterSchema);
