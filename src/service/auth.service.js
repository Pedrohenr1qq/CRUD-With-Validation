// Dependencies
const jwt = require('jsonwebtoken');

// Internal requires
const User = require('../model/User.model');

// Find user by a atribute --> email
const loginService = (email) => User.findOne({email});

// Generate a token by a secrect key defined in the code
const generateToken = (user, SECRET_KEY) => jwt.sign({user}, SECRET_KEY);

module.exports = {
  loginService,
  generateToken
};