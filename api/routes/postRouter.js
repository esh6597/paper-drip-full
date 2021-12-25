const express = require('express');
const Post = require('../models/post');
const authenticate = require('../authenticate');

const postRouter = express.Router();

module.exports = postRouter;