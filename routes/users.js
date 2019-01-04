var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/user_controller');

router.get('/signup', user_controller.registrationPage);

router.get('/sign-out', user_controller.signOutUser);

router.post('/login', user_controller.loginUser);

router.post('/signup', user_controller.signUpUser);

module.exports = router;
























