//Var is now deprecated; using const instead.
const express = require('express');
const path = require('path');

//Logging errors and actions
const createError = require('http-errors');
const morgan = require('morgan');

//Mongoose for schemas
const mongoose = require('mongoose');

//Router Imports


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

//Use Routers


//Catch missing files and send to error handler--same as Express Generator's
app.use((req, res, next) => {
  next(createError(404));
});

//Error Handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  //Only provides error in development mode
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //Render error page; gives generic server error if no error status.
  res.status(err.status || 500);

  //Uses Pug layout view to render HTML
  res.render('error');
});