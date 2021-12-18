//SCHEMA FOR ARTICLE BODY
//Notice how there's no link for article ID. These are automatically
//  populated into the article page through the article schema's array.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contentSchema = new Schema({
  //This property is to tell the API how to render this.
  category: { //I wanted to use type here, but thought it'd be confusing.
    type: String,
    required: [true, 'Content category required! Use \'text\', \'image\', or \'video\'.']
  },
  //These properties are made optional.
  //ONLY USE ONE; category property only renders the specified type.
  text: {
    type: String
  },
  video: {
    type: String
  },
  image: {
    type: String
  }
});

//There's no ID link to the content's article since this object's ._id
//  will be in Article's content array instead.

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;