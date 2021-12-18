//SCHEMA FOR SHOP ITEMS

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validate = require('../validate');

const itemSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Item name required.'],
    maxlength: [100, 'Title must be below 100 characters!']
  },
  //No author property. Owner/main admin manages this exclusively.
  summary: {
    type: String,
    required: [true, 'Summary required.'],
    maxlength: [150, 'Summary must be below 150 characters!']
  },
  thumbnail: { //Must be an image string
    type: String,
    required: true,
    validate: validate.checkImage
  },
  images: [{
    type: String
  }]
}, {
  //Time posted might not be displayed in final product info, but is
  //  useful for keeping track. Keeping here just in case.
  timestamps: true
});