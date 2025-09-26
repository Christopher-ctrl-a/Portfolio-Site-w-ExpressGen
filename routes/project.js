// project.js Christopher Esguerra 301483615 September 24, 2025
const { name } = require('ejs');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('project', {
    header: "Below are some of the projects I've worked on:",
    name  : "Christopher Esguerra",
    description: "I'm a junior software developer who's passionate about creating engaging and user-friendly web experiences, with this site being my current project!",
    footer: "2025 Christopher Esguerra. All rights reserved. (currently not mobile supported)",
    projectDesc: ["This my first project which involved creating a responsive website using HTML and CSS. This site is not as polished as I want it to be, however feel free to take a look! I focused on semantic HTML and modern CSS techniques to ensure the site is accessible and functional.",
      "This is a personal project to showcase my pixel art creations. I used HTML and CSS to create a visually appealing gallery layout. The site is designed to be simple and easy to navigate, allowing visitors to focus on the artwork.",
      "This is a UML diagram which I've built to represent the database structure for a project. It includes all the entities and their relationships, providing a clear overview of the system's architecture. In order to simulate a real world application, I used chatGPT to formulate a documentation of requirements and specifics."],
    projectTitles: ["Responsive Website", 
      "Pixel Art Gallery", 
      "UML Diagram"],
    projectLinks: ["https://christopher-ctrl-a.github.io/Introduction/", 
      "https://chris-esguerra.github.io/Pixel-Art-Gallery/"],
  });
});

module.exports = router;
