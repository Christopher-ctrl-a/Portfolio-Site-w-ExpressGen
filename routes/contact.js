// contact.js Christopher Esguerra 301483615 September 24, 2025
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('contact', {

        header: "Contact Me",
        label: ["Name", "Email", "Message"],
        button: "Send",
        footer: "2025 Christopher Esguerra. All rights reserved. (currently not mobile supported)",
        description: "If you would like to get in touch, please fill out the form below!",

    });
});

module.exports = router;