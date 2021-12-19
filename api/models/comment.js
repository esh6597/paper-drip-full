//SCHEMA FOR ARTICLE COMMENTS
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({
  //ID of main review or article comment was posted on
  parentID: {
    type: mongoose.ObjectId,
    refpath: 'parentType',
    required: [true, 'Parent ID required!']
  },
  //What model type parent uses
  parentType: {
    type: String,
    required: [true, 'Parent type required!'],
    enum: ['Article','Comment','Review']
  },
  //ID of parent comment, if there is any
  //  If empty, is rendered as a top-level comment
  parentComment: {
    //References comment ID if comment is in reply to someone else's.
    //  This is mostly to avoid long, nested comment chains.
    //  There is no nesting of comments beyond a single reply indent.
    type: mongoose.ObjectId,
    ref: 'Comment'
  },
  author: {
    type: mongoose.ObjectId,
    ref: 'User',
    required: [true, 'Author field required.']
  },
  content: {
    //This was kept as "content" for consistency's sake. This, however,
    //  is not an array, but the single comment string.
    type: String,
    required: [true, 'Please enter a comment.']
  },
  likes: {
    type: Number,
    default: 0
  },
  dislikes: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;