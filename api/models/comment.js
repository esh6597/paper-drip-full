//SCHEMA FOR ARTICLE COMMENTS
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({
  article: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article',
    required: true
  },
  reply: {
    //References comment ID if comment is in reply to someone else's.
    //  This is mostly to avoid long, nested comment chains.
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    //This was kept as "content" for consistency's sake. This, however,
    //  is not an array, but the single comment string.
    type: String,
    required: [true, 'Please enter a comment.']
  },
  likes: {
    type: Number
  },
  dislikes: {
    type: Number
  }
}, {
  timestamps: true
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;