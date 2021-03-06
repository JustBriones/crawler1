//boiler plate to get server off the ground
var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//this line tells app where angular lives
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);


//exports to entire app for use
module.exports = app;
