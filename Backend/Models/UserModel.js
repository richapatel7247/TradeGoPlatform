const mongoose = require('mongoose');
const Schema = mongoose.Schema;
LocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    email : String
});

User.plugin(LocalMongoose);

module.exports = mongoose.model('User', User);
