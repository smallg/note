// Get dependencies
const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();
const proxy = require('http-proxy-middleware');

// Set proxy
const options = {
  target: process.env.apiHost,
  changeOrigin: true,
  pathRewrite: {
    '/api': process.env.apiPath + '/api',
  },
};
const exampleProxy = proxy(options);
console.log('sg apiHost: ', process.env.apiHost);

// Compress resources
app.use(compression());

// Point static path to dist
app.use(express.static(path.join(__dirname)));

app.use('/api/*', exampleProxy);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});


/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);


app.listen(port);

