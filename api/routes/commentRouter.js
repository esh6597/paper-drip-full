const express = require('express');
const Comment = require('../models/comment');
const authenticate = require('../authenticate');

const commentRouter = express.Router();

module.exports = commentRouter;