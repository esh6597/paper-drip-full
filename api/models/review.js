//SCHEMA FOR ITEM REVIEWS
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validate = require('../validate');


const reviewSchema = new Schema({
  //Review title
  name: {
    type: String,
    required: [true, 'Article name required.'],
    maxlength: [100, 'Title must be below 100 characters!']
  },
  author: {
    type: mongoose.ObjectId,
    ref: 'User',
    required: true
  },
  rating: {
    type: Number,
    min: [0, 'Rating must be above zero.'],
    max: [5, 'Rating must be below five.'],
    required: [true, 'Please rate the product.']
  },
  //Optional array of user-uploaded product images
  images: [{
    type: mongoose.ObjectId,
    ref: 'Content'
  }],
  //Named 'content' for consistency. This is a string, NOT an
  //  array of object IDs.
  content: {
    type: String,
    required: [true, 'Please type a review!']
  },
  //Likes and dislikes are named so in this program for consistency;
  //  user will see review ratings as 'helpful' or not.
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

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;