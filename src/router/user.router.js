// Dependencies
const router = require('express').Router();

// Internal Requires
const users = require('../controller/user.controller');

// GET Routes
router.get('/', (req, res)=> {res.send("USER HOME")});
router.get('/find/:id', users.findUserById);
router.get('/findAll', users.findAllUsers);

// POST Route
router.post('/create', users.createUser);

// PUT Route
router.put('/update/:id', users.updateUser);

// DELETE Route
router.delete('/delete/:id', users.deleteUser);

module.exports = router;