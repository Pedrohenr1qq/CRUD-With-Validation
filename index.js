// Dependecies: 
const express = require('express');

// Internal Requires
const connectToDatabase = require('./src/database/database');
const User = require('./src/router/user.router');

// Start database
connectToDatabase();

// Start application
const app = express();
const port = 3000;

app.use(express.json());

// CRUD routes
app.use("/user", User);

// Main route
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Start server
app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`);
});