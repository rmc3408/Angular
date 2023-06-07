const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PostSchema = new Schema({
  id: ObjectId,
  title: { type: String, match: /[a-z]/, required: true },
  content: { type: String, min: 6, default: 'hahaha', required: true },
});

module.exports = mongoose.model('Post', PostSchema)

mongoose.connect('mongodb+srv://rmc3408:secret123@mean.t2i4aal.mongodb.net/')
  .then(() => console.log('Connected to Database!'));