// Add Express
const express = require("express");

// Initialize Express
const app = express();
const port = 4000;

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

// Initialize server
app.listen(process.env.PORT || port, () => {
  console.log(`Running on http://localhost:${process.env.PORT || port}.`);
});

// Export the Express API
module.exports = app;
