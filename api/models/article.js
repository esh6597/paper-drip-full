const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Validator for summary length; must be <= 150 characters.
function sumLength (string) {
  return string.toString().length <= 150;
}
//Custom message for error
const sumValid = [sumLength, 'Summary must be below 150 characters!']

const articleSchema = new Schema({
  name: { //Doesn't have to be unique in case of numerous articles
    type: String,
    required: [true, 'Article name required.']
  },
  summary: { //Must be <= 150 characters
    type: String,
    validate: sumValid,
    required: [true, 'Summary required.']
  },
  thumbnail: { //Must be an image string
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;