let mongoose = require 'mongoose';
let Schema = mongoose.Schema;

let PostSchema = new Schema({
  title: String,
  text: String,
  city: City.schema,
  user: User.schema
  // QUESTION: How to grab specific city and userid
})
