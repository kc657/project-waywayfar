let mongoose = require('mongoose')
    Schema = mongoose.Schema
    City = require('./city')
    passportLocalMongoose = require('passport-local-mongoose');

let UserSchema = new Schema({
  first_name: String,
  last_name: String,
  password: String,
  email_address: String,
  _city: {type: Schema.Types.ObjectId, ref: 'City'}
  // user_img : String
});

UserSchema.plugin(passportLocalMongoose);

let User = mongoose.model('User', UserSchema);
module.exports = User;
