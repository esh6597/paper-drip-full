//SCHEMA FOR SHOP ITEMS

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validate = require('../validate');

//Import currency
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

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
    required: [true, 'Please include a thumbnail image.'],
    validate: validate.checkImage
  },
  //Uses the same content collection as Article schema; allows
  //  for content reuse. Please don't add text IDs! They won't
  //  render correctly.
  //This is for item slideshow
  //Images should only have 1 initial video then image files ONLY.
  //  This is not enforced, so non-image/video files will just
  //  break the code.
  images: [{
    type: mongoose.ObjectId,
    ref: 'Content'
  }],
  //Can also use the same array method within a schema multiple times;
  //  This is for item description/demonstration and can be
  //  formatted in multiple ways like articles can be.
  content: [{
    type: mongoose.ObjectId,
    ref: 'Content'
  }]
}, {
  //Time posted might not be displayed in final product info, but is
  //  useful for keeping track. Keeping here just in case.
  timestamps: true
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;