var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
router.get('/getshoes', function(req,res,next) {
    url = 'http://www.sneakerexclusive.com/jordan-release-dates/';
    // The structure of our request call
    // The first parameter is our URL
    // 
    request(url, function(error, response, html) {

        if(!error) {
            var $ = cheerio.load(html);

            // Finally , define the variables we're going to capture
            var imgUrl, shoeName, releaseDate;
            var json = { imgUrl: "", shoeName: "", releaseDate: "", color: "" };   
            $('p').filter(function(data) {
                var data = $(this);
                imgUrl = data.children().first().attr('src');
            })
            json.imgUrl = imgUrl;
            // console.log(json);
        }
    })
    // console.log(json);
});
module.exports = router;