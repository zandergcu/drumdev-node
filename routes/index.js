var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Web Developers in Drumchapel | DrumDev',
    description: 'DrumDev is a work in progress created by two Web Developers in Drumchapel. Web Design is a hobby of ours and this is good for practice and experience.',
    url: 'http://drumdev.co.uk'
  });
}); 

/* GET 'another page'. */
router.get('/another-page', function(req, res, next) {
  res.render('index', { title: 'Express - Another Page' });
});

/* GET 'and another page'. */
router.get('/and-another', function(req, res, next) {
  res.render('index', { title: 'Express - And Another' });
});

module.exports = router;
