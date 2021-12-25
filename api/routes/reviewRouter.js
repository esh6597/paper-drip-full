const express = require('express');
const Review = require('../models/review');
const authenticate = require('../authenticate');

const reviewRouter = express.Router();

module.exports = reviewRouter;