//SCHEMA FOR FORUM POSTS
//This feature isn't implemented yet, but I wanted to put this
//  schema in so my front end has complete data on how to function.
//I heavily plan on adding a forum.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  //All posts in a thread will be responses to the original post, unless
  //  the post specifically @'s a different one.
  //There will be no nesting in the forum, so if no parent ID, the post
  //  will be rendered as a thread.
  parentID: {
    type: mongoose.ObjectId,
    ref: 'Post',
    required: false
  },
  name: {//Post title/summary
    type: String,
    required: [true, 'Post title required.'],
    maxlength: [100, 'Title must be below 100 characters!']
  },
  author: {
    type: mongoose.ObjectId,
    ref: 'User',
    required: true
  },
  //Posts will be formatted and allowed to host images/rich text.
  //  Using the same array format as Article schema.
  content: [{
    type: mongoose.ObjectId,
    ref: 'Content'
  }]
}, {
  timestamps: true
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;