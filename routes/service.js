// service.js Christopher Esguerra 301483615 September 24, 2025
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('service', {
    header: "My Skills",
    description: "Below are some of the skills and technologies I have experience with:",
    footer: "2025 Christopher Esguerra. All rights reserved. (currently not mobile supported)",
    skillsList: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Pixel Art",
      "C#",
      "Java",
      "Node.js",
      "MongoDB",
      "SQL",
      "Express.js",
      "Github"
    ]

  });
});

module.exports = router;
