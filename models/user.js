let mongoose = require('mongoose'),
let Schema = mongoose.Schema,
let passportLocalMongoose = require('passport-local-mongoose')

let UserSchema = new Schema({
  givenName: String,
  familyName: String,
  password: String,
  email_address: String,
  username: String
  // _city: {type: Schema.Types.ObjectId, ref: 'City'}
  // user_img : String
})

UserSchema.plugin(passportLocalMongoose)

var User = mongoose.model('User', UserSchema)
module.exports = User
