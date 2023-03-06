const express = require('express');
const loginController = require('./../controllers/loginController');
const passport = require('passport');
const passportJWT = require('passport-jwt');

const router = express.Router();

router.route('/').post(loginController.loginUser);

module.exports = router;
