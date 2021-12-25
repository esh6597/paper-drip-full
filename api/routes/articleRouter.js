const express = require('express');
const Article = require('../models/article');
const authenticate = require('../authenticate');

const articleRouter = express.Router();

module.exports = articleRouter;