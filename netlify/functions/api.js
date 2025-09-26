// netlify/functions/api.js - Serverless function wrapper for Express app
const serverless = require('serverless-http');
const app = require('../../app');

// Wrap the Express app with serverless-http
exports.handler = serverless(app);