// Internal Requires
const User = require('../model/User.model');

// Functions to acess database and return datas
// READ
const findUserById = (id) => User.findById(id);
const findAllUsers = () => User.find();

// CREATE
const createUser = (newUser) => User.create(newUser);

// UPDATE
const updateUser = (id, user) => User.findByIdAndUpdate(id, user, {returnDocument:"after"});

// DELETE
const deleteUser = (id) => User.findByIdAndDelete(id);

module.exports = {
  findUserById,
  findAllUsers,
  createUser,
  updateUser,
  deleteUser
}