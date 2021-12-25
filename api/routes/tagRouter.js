const express = require('express');
const Tag = require('../models/tag');
const authenticate = require('../authenticate');

const tagRouter = express.Router();

module.exports = tagRouter;