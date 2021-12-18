//SCHEMA FOR ARTICLE APPEARANCE

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validate = require('../validate');

const articleSchema = new Schema({
  name: { //Doesn't have to be unique in case of numerous articles; must be under 100 characters.
    type: String,
    required: [true, 'Article name required.'],
    maxlength: [100, 'Title must be below 100 characters!']
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  summary: { //Must be <= 150 characters
    type: String,
    required: [true, 'Summary required.'],
    maxlength: [150, 'Summary must be below 150 characters!']
  },
  thumbnail: { //Must be an image string
    type: String,
    required: true,
    validate: validate.checkImage
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

//I did not put any tags nor featured property here as they will be included in
//  a separate API collection as Article IDs in tagged arrays.
//Comments are excluded; comment schema will reference via ID.

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;