const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// load and check enviroment
const dotenv = require('dotenv').config();

if (dotenv.error) {
  throw dotenv.error
} else {
  console.log(dotenv.parsed)
}

var indexRouter = require('./routes/index');
var cvRouter = require('./routes/cv');
var photoRouter = require('./routes/photo');
var eastereggRouter = require('./routes/easteregg');
var contactRouter = require('./routes/contact');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// bootstrap JS dependencies and jQuery
app.use('/javascripts', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/javascripts', express.static(__dirname + '/node_modules/bootstrap/dist/js/'));

app.use('/', indexRouter);
app.use('/cv', cvRouter);
app.use('/photo', photoRouter);
app.use('/easteregg', eastereggRouter);
app.use('/contact', contactRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
