let mongoose = require('mongoose')
let Schema = mongoose.Schema
City = require('./city')
User = require('./user')

let PostSchema = new Schema({
  title: String,
  text: String,
  _city: {type: Schema.Types.ObjectId, ref: 'City'}
  // _user: {type: Schema.Types.ObjectId, ref: 'User'}
})

let Post = mongoose.model('Post', PostSchema)
module.exports = Post
