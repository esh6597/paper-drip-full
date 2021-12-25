const express = require('express');
const Item = require('../models/item');
const authenticate = require('../authenticate');

const itemRouter = express.Router();

module.exports = itemRouter;