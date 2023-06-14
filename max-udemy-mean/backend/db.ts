const path = require("path")
const mongoose = require('mongoose')
const { config } = require('dotenv')
config({ path: path.join(__dirname, '..', '.env')})

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PostSchema = new Schema({
  id: ObjectId,
  title: { type: String, match: /[a-z]/, required: true },
  content: { type: String, min: 6, default: 'hahaha', required: true },
});

module.exports = mongoose.model('Post', PostSchema)

mongoose.connect(process.env["MONGODB"])
  .then(() => console.log('Connected to Database!'));