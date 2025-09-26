// index.js Christopher Esguerra 301483615 September 24, 2025
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    header: "Welcome",
    namestart: "Hi! My name is",
    name: "Christopher Esguerra",
    description: "I'm a junior software developer who's passionate about creating engaging and user-friendly web experiences, with this site being my current project!",
    img: "../public/images/pfp.png",
    footer: "2025 Christopher Esguerra. All rights reserved. (currently not mobile supported)",

  });
});

module.exports = router;
