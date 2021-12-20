//SCHEMA FOR USERS

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validate = require('../validate');

const userSchema = new Schema({
  //Username, called name for consistency
  name: {
    type: String,
    required: [true, 'Please enter a username.']
  },
  //Account type: defaults to unvalidated email account (no abilites)
  tier: {
    type: String,
    required: true,
    default: 'unverified',
    enum: ['unverified', 'user', 'moderator', 'author', 'admin']
  },
  //Email doesn't use validation as it will be checked by sending
  //  verification email to user.
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    validate: validate.checkImage
  },
  //Personal info fields are optional to make testing accounts easier.
  //  This also allows users to fill them in later if they just want
  //  to make an account for right now, or opt in on what info they
  //  wish to share.
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  //These values are arrays to support multiple contact infos.
  //  First value in array will be treated as primary.
  //Contact info is currently large; may change to separate collection.
  phone: [{
    type: Number,
    validate: validate.checkImage
  }],
  //Street address/line 1 of address for shipping
  address1: [{
    type: String
  }],
  //Line 2 of address
  address2: [{
    type: String
  }],
  //City
  addressCity: [{
    type: String
  }],
  addressState: [{
    type: String
  }],
  addressZip: [{
    type: Number
  }]
  //No payment info yet; will add this once I figure out ecommerce.
}, {
  //To keep track of account age
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;