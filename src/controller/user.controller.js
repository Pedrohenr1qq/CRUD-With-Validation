// Dependencies
const mongoose = require('mongoose');

// Internal Requires
const userService = require('../service/user.service');
const authService = require('../service/auth.service');

// key to create token by JWT
const SECRET_KEY = "6708726fe28c04b61fa833e8";

// Functions to CRUD

// READ
const findUserById = async (req, res) => {
  let found = false;

  try {
    const id = new mongoose.Types.ObjectId(req.params.id); 

    const user = await userService.findUserById(id);
    
    found = (user != null);

    if(found) {
      console.log('User found!');
      return res.send(user);
    }
    else return res.status(404).send({message: "User not found"});

  } catch (error) {
    console.log(`Error in try find user by id: ${error}`);
    return res.status(500).send({message: "Internal Error. Try again later"});
  }
}

const findAllUsers = async (req, res) => {
  return res.send(await userService.findAllUsers());
}

// CREATE
const createUser = async (req, res) => {
  const user = req.body;
  try {
    if(Object.keys(user).length === 0) return res.status(400).send({message: "The body request is null"})

    if(!user.name) return res.status(400).send({message: "The name field is null"});
    if(!user.email) return res.status(400).send({message: "The email field is null"});
    if(!user.password) return res.status(400).send({message: "The password field is null"});
  
    user.token = authService.generateToken(user, SECRET_KEY);
  
    console.log("New user created!");
    return res.status(201).send(await userService.createUser(user, SECRET_KEY));

  } catch (error) { 
    console.log("Error in create a new user: "+error);
    res.status(500).send({message: "Internal Error. Try again later"});
  } 
}

// UPDATE
const updateUser = async (req, res) => {
  let found = false;
  const user = req.body;

  if(Object.keys(user).length === 0) return res.status(400).send({message: "The body request is null"})

  if(!user.name) return res.status(400).send({message: "The name field is null"});
  if(!user.email) return res.status(400).send({message: "The email field is null"});
  if(!user.password) return res.status(400).send({message: "The password field is null"});

  try {
    const id = new mongoose.Types.ObjectId(req.params.id); 
    const userUpdated = await userService.updateUser(id, user)

    found = (userUpdated != null);

    if(found){
      console.log("User updated!");
      return res.send(userUpdated);
    }

    else return res.status(404).send({message: "User not found"});

  } catch (error) {
    console.log(`Error in try update user by id: ${error}`);
    return res.status(500).send({message: "Internal Error. Try again later"});
  }
} 

// DELETE
const deleteUser = async (req, res) => {
  let found = false;
  try {
    const id = new mongoose.Types.ObjectId(req.params.id); 
    const userDelete = await userService.deleteUser(id);

    found = (userDelete != null);

    if(found) {
      console.log('User deleted!');
      return res.send(userDelete);
    }
    else return res.status(404).send({message: "User not found"});
  } catch (error) {
    console.log(`Error in try update user by id: ${error}`);
    return res.status(500).send({message: "Internal Error. Try again later"});
  }
}

module.exports = {
  findUserById,
  findAllUsers,
  createUser,
  updateUser,
  deleteUser
}