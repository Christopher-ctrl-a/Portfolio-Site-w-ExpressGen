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
    ],
    image: ["images/pexels-joshsorenson-1714208.jpg",
      "images/pexels-luis-gomes-166706-546819.jpg",
      "images/pexels-pixabay-301792.jpg"]

  });
});

module.exports = router;
