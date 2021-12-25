const express = require('express');
const User = require('../models/user');
const authenticate = require('../authenticate');

const userRouter = express.Router();

module.exports = userRouter;