const express = require("express");
const app = express();

// Define routes and handle requests
app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
