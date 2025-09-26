// app.js Christopher Esguerra 301483615 September 24, 2025
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var contactRouter = require('./routes/contact');
var projectRouter = require('./routes/project');
var serviceRouter = require('./routes/service');

var app = express();

// Determine the root directory (handle both local and serverless environments)
var rootDir = __dirname;
if (__dirname.includes('.netlify/functions-serve') || __dirname.includes('.netlify\\functions-serve')) {
  // When running in Netlify functions, go up to the project root
  // From .netlify/functions-serve/api/netlify/functions to project root
  rootDir = path.resolve(__dirname, '../../../../../..');
} else if (process.env.NETLIFY) {
  // In production Netlify environment
  rootDir = '/var/task';
}

// view engine setup
app.set('views', path.join(rootDir, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(rootDir, 'public')));

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/project', projectRouter);
app.use('/service', serviceRouter);

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
