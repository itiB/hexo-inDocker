'use strict';

// required packages
const path = require('path');

// base
const express = require('express');
const app = express();
app.set('port', 1337);

// static files
app.use(express.static(path.join(__dirname, './hexo/public/')));

// server
const http = require('http');
const server = http.createServer(app);

// http 404 error handler
app.use(function (req, res, next) {
    const err = new Error('errorMessage.urlNotFound');
    err.status = 404;
    next(err);
});

// error handling middleware should be loaded after the loading the routes
if ('development' === app.get('env')) {
    const errorHandler = require('errorhandler');
    app.use(errorHandler());
}

// listen
server.listen(app.get('port'));