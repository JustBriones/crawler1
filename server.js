var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

//example3
var destination = fs.createWriteStream('./downloads/fdsfds.html');
var url = "https://orangecounty.craigslist.org/search/sof";
request(url)
  .pipe(destination)
  .on('finish', function(){
    console.log('done');
  })
  .on('error',function(err){
    console.log(err);
  })

  module.exports = app;
