//SCHEMA FOR FEATURE TAGS
//  I wanted to organize tags this way so that it'd be easier
//  for users to find things, and be able to find different
//  types of documents (articles, shop items, etc.)

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagSchema = new Schema({
  name: { //Tag being searched for; includes posts tagged 'featured'
    type: String,
    required: [true, 'Tag name required.'],
    //This is optional; I simply didn't want giant tags.
    maxlength: [100, 'Please enter a tag below 100 characters.']
  },
  //This is an array of Object IDs referring to tagged posts, articles, etc.,
  //  NOT an array of 'content' IDs.
  content: [{
    type: mongoose.ObjectId,
    refpath: 'contentType',
    required: false //If no content tag can still be created and assigned to posts
  }],
  contentType: {
    type: String,
    //Post is not working; left in for future forum feature
    required: [true, 'Content type required! Use Article, Comment, Post* or Review.'],
    enum: ['Article', 'Comment', 'Review']
  }
//No timestamps
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;