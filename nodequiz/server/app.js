/*
============================================
; Author: Ethan Townsend
; Date:   8/12/2019
; Description: web-425
;===========================================
*/ 


const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

const api = require('./routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../dist/nodequiz')));
app.use('/', express.static(path.join(__dirname, '../dist/nodequiz')));

app.use('/api', api);


// Global variables
const serverPort = 3000;

/************************* Mongoose connection strings go below this line  ***************/

/************************* API routes go below this line ********************/

/********************* api routes located in ./routes/api ******************/

/**
 * Creates an express server and listens on port 3000
 */
http.createServer(app).listen(serverPort, function() {
  console.log(`Application started and listing on port: ${serverPort}`);
});