const express = require('express');
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
  console.log("World")
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
