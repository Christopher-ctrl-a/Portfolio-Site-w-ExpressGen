// netlify/functions/api.js - Serverless function wrapper for Express app
const serverless = require('serverless-http');
const express = require('express');
const path = require('path');

// Import route handlers
const indexRouter = require('../../routes/index');
const aboutRouter = require('../../routes/about'); 
const contactRouter = require('../../routes/contact');
const projectRouter = require('../../routes/project');
const serviceRouter = require('../../routes/service');

const app = express();

// Set up view engine - views are now in the function directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
const cookieParser = require('cookie-parser');
const logger = require('morgan');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/project', projectRouter);
app.use('/service', serviceRouter);

// Error handlers
app.use(function(req, res, next) {
  res.status(404).json({ error: 'Not found', path: req.path });
});

app.use(function(err, req, res, next) {
  console.error('Express Error:', err);
  res.status(err.status || 500).json({ 
    error: err.message || 'Server error',
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

// Wrap the Express app with serverless-http
exports.handler = serverless(app);