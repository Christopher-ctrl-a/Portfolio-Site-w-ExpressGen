// netlify/functions/api.js - Serverless function wrapper for Express app
const serverless = require('serverless-http');
const express = require('express');
const path = require('path');

// Import route handlers directly instead of the full app
const indexRouter = require('../../routes/index');
const aboutRouter = require('../../routes/about'); 
const contactRouter = require('../../routes/contact');
const projectRouter = require('../../routes/project');
const serviceRouter = require('../../routes/service');

const app = express();

// Set up view engine for serverless environment
app.set('view engine', 'ejs');

// Fix views path for different environments
let viewsPath;
if (process.env.NETLIFY) {
  // Production Netlify environment
  viewsPath = path.join('/var/task', 'views');
} else if (__dirname.includes('.netlify')) {
  // Local netlify dev environment - go up from .netlify/functions-serve/api/netlify/functions
  viewsPath = path.resolve(__dirname, '../../../../../views');
} else {
  // Standard local development
  viewsPath = path.join(__dirname, '../../views');
}

console.log('Views path:', viewsPath);
app.set('views', viewsPath);

// Middleware (include all the middleware from the original app)
const cookieParser = require('cookie-parser');
const logger = require('morgan');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Static files - in serverless, these should be handled by Netlify directly
// app.use(express.static(...)) is not needed as Netlify serves static files

// Routes with debug logging
app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.path}`);
  next();
});

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