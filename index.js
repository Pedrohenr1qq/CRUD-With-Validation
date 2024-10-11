// Dependecies: 
const express = require('express');
const jwt = require('jsonwebtoken');

// Internal Requires
const connectToDatabase = require('./src/database/database');
const User = require('./src/router/user.router');
const authService = require('./src/service/auth.service');

// key to create token by JWT
const SECRET_KEY = "6708726fe28c04b61fa833e8";

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

// Login route
app.post('/login', async (req,res)=>{

  try {
    const {email, password} = req.body;
    const user = await authService.loginService(email);
  
    if(!user){
      return res.status(404).send({message:'User not found!'});
    }
  
    if(password != user.password){
      console.log("The password is incorrect");
      return res.status(400).send({message: "Login incorrect!"})
    }

    const token = authService.generateToken(user, SECRET_KEY);
    console.log(user);
  
    res.status(200).send({user, token});  
  } catch (error) {
    console.log("Error in login: "+ error);
    res.status(500).send("Internal error. Try again later");
  }
});

// Validate Route
app.get('/validate', (req, res) => {
  const authHeaders = req.headers.authorization;

  if(!authHeaders) return res.status(401).send({message: "Token field is empty"});

  const parts = authHeaders.split(" ");

  if(parts.length !== 2) {
    console.log('Invalid token');
    return res.status(401).send({message: "Login invalid"});
  };

  const [scheme, token] = parts;

  if(!/^Bearer$/i.test(scheme)) {
    console.log("Malformatted token");
    return res.status(401).send({message: "Login invalid"});
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if(err) {
      console.log(`Error in validate token: ${err}`);
      return res.status(500).send({message: "Internal Error. Trye again later."});
    }

    res.send(decoded);
  })
});

// Start server
app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`);
});