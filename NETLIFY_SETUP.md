# Netlify Express.js Deployment

This repository has been configured for deployment on Netlify using serverless functions.

## Deployment Setup

The following files have been configured for Netlify deployment:

### `netlify/functions/api.js`
This is the serverless function that wraps your Express app. All routes will be handled through this function.

### `netlify.toml`
Configuration file that:
- Sets up the build command 
- Configures the functions directory
- Sets up redirects to route all requests through the Express app
- Specifies external Node modules needed

## How it works

1. **Serverless Function**: Your Express app is wrapped in a serverless function using `serverless-http`
2. **Redirects**: All incoming requests are redirected to `/.netlify/functions/api`
3. **Static Files**: Your `public` directory is served as static assets
4. **Routes**: All your existing Express routes (`/`, `/about`, `/contact`, `/project`, `/service`) work as before

## Deployment

To deploy to Netlify:

1. Connect your repository to Netlify
2. Netlify will automatically detect the configuration from `netlify.toml`
3. Your site will be built and deployed as serverless functions

## Local Development

Continue developing locally as before using:
```
npm start
```

The Netlify setup doesn't interfere with your local development workflow.