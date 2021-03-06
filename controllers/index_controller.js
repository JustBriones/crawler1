var request = require('request');
var cheerio = require('cheerio');

function index(req, res) {
  var jobs = [];

  request('https://www.indeed.com/jobs?q=front+end&l=Orange+County%2C+CA', function(err, resp, body) {
    if(!err && resp.statusCode === 200) {
      var $ = cheerio.load(body);
      $('h2 a').each(function() {
        var url = $(this).attr('href');
        var title = $(this).attr('title');
        jobs.push({
          url: 'https://www.indeed.com' + url,
          title: title,
          note: "",
          showNote: false,
          showButton: false
        });
      })
      console.log(jobs);
      res.json(jobs)
    }
  });
}

//exports code to entire application
module.exports = {
  index: index
}
