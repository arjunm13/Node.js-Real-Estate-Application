var express = require('express');
var router = express.Router();
var passport = require('passport');

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.render('loginError');
}

	/* GET login page. */
	router.get('/', isAuthenticated,function(req, res) {
    	// Display the Login page with any flash message, if any
		res.render('homes', { message: req.flash('message') });
	});

module.exports = router;
