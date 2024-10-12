// Internal Require
const app = require('./index');

// Port where the server will be run
const port = 3000;

// Start server
app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`);
});