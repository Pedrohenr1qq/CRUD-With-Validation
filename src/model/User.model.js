// Dependencies
const mongoose = require('mongoose');

// Create a schema for a use
const userSchema = new mongoose.Schema({
  "name": {type: String, required: true},
  "email": {type: String, required: true, unique: true},
  "password": {type: String, required: true}
});

// Create a collection with a model to User
const User = mongoose.model("user", userSchema);

module.exports = User;