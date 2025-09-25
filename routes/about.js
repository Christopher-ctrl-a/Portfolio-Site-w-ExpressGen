// about.js Christopher Esguerra 301483615 September 24, 2025
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('about', {
   header: "About Me",
            description: "Thanks for checking out my site! My name is Christopher Esguerra and I'm a junior software engineer (advanced diploma by 2027). I'm always excited to learn new skills and apply them to personal and academic projects. My other hobbies include rock climbing, casual walks, and video games.",
            
            name: "Christopher Esguerra",
            footer: "2025 Christopher Esguerra. All rights reserved. (currently not mobile supported)",
          
  });
});



module.exports = router;
