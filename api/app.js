//Var is now deprecated; using const instead.
const express = require('express');
const path = require('path');

//Logging errors and actions
const createError = require('http-errors');
const morgan = require('morgan');

const mongoose = require('mongoose');

//Routers


const app = express();

//View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Log actions. Currently using concise 'dev' method, can be configured to show other info.
app.use(morgan('dev'));

//This app uses the JSON data format for serving database files.
app.use(express.json());

//Serves static files from /public directory.
app.use(express.static(path.join(__dirname, 'public')));