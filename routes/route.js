var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// Console.log req info
router.use(function(req,res,next) {
	console.log(`Request body: ${ JSON.stringify(req.body)}'`);
	next();
});

module.exports = router;