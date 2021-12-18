//Var is now deprecated; using const instead.
const express = require('express');
const path = require('path');


//Logging errors and actions
const createError = require('http-errors');
const morgan = require('morgan');


//Mongoose for schemas; then connect to MongoDB based on config
const mongoose = require('mongoose');
const config = require('./config');

const url = config.mongoUrl;
const connect = mongoose.connect(url, {
  appName: 'Paper Drip 0.2.0'
});

connect.then(() => console.log('Connected correctly to Paper Drip server'),
  err => console.log(err)
);


//Router Imports


const app = express();

//View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(morgan('dev')); //Log actions. Currently using concise 'dev' method, can be configured to show other info.
app.use(express.json()); //This app uses the JSON data format for serving database files.
app.use(express.urlencoded({ extended: false })); //Parses URL encoded requests.

app.use(express.static(path.join(__dirname, 'public'))); //Serves static files from /public directory.


//Use Routers


//Catch missing files and send to error handler--same as Express Generator's
app.use(function(req, res, next) {
  next(createError(404));
});


//Error Handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  //Only provides error in development mode
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //Render error page; gives generic server error if no error status.
  res.status(err.status || 500);

  //Uses Pug layout view to render HTML
  res.render('error');
});


//Export for use in /bin/www
module.exports = app;