let mongoose = require 'mongoose';
let Schema = mongoose.Schema;

let UserSchema = new Schema({
  username: String,
  password: String,
  email_address: String,
  city_id: String
  // QUESTION: How will city_id and city name join during user sign up?
})
let User = Mongoose.model('User', UserSchema);

module.exports = User;
