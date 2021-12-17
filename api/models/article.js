//SCHEMA FOR ARTICLE APPEARANCE

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Here is some old code for a custom validator function with error message.
  I've used maxlength below, but this code may be reused for other validators, so
  I'm keeping it here.

function sumLength (string) {
  return string.toString().length <= 150;
}

Custom message for error
const sumValid = [sumLength, 'Summary must be below 150 characters!']
*/

const articleSchema = new Schema({
  name: { //Doesn't have to be unique in case of numerous articles
    type: String,
    required: [true, 'Article name required.']
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  summary: { //Must be <= 150 characters
    type: String,
    required: [true, 'Summary required.'],
    maxlength: [150, 'Summary must be below 150 characters!']
  },
  thumbnail: { //Must be an image string
    type: String,
    required: true
  },
  //Because we will load this schema a LOT, I wanted to put its actual contents into a separate area.
  //This way, uploads can be split up into different types that will be rendered in the order
  //  they appear in the array. This might just be a convoluted fix, but it allows for uploads above
  //  file size limit since it splits them.
  //If you have a better way of doing this, PLEASE fork and fix on Github! I'd love it!
  //You can also pick and reuse chunks, editing the article in REPL shell.
  content: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Content'
  }]
}, {
  timestamps: true
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;