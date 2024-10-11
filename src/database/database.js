// Dependencies
const mongoose = require('mongoose');

// Create connection to database USER
const connectToDatabase = () => {
  mongoose.connect(`mongodb://127.0.0.1:27017/user`
  ).then(()=> {
    console.log("DATABASE CONNECTED");
  }).catch((err) => {
    return console.log(`ERROR in database connection: ${err}`);
  });
};

module.exports = connectToDatabase;