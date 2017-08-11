let mongoose = require('mongoose')
let Schema = mongoose.Schema
City = require('./city')

let UserSchema = new Schema({
  username: String,
  password: String,
  email_address: String,
  _city: {type: Schema.Types.ObjectId, ref: 'City'}
  // user_img : String
})
let User = mongoose.model('User', UserSchema)

module.exports = User
