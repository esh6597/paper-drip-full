//SCHEMA FOR FORUM THREADS
//  Forums are not a feature yet; including for front end data.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const threadSchema = new Schema({

}, {
  timestamps: true
});

const Thread = mongoose.model('Thread', threadSchema);