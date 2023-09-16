const express = require("express");
const app = express();
const port = 3000;
const robot = require("robotjs");

function leftClickAtPosition(x, y) {
  console.log(`Moving mouse to coordinates (${x}, ${y})`);
  robot.moveMouse(x, y);
  console.log("Performing a left click");
  robot.mouseClick();
}

// Define the route for the root URL
app.get("/", (req, res) => {
  console.log("Received GET request on root URL");

  // Call the function to perform a left click at 262x157
  // Delay it by 5 seconds
  setTimeout(() => {
    leftClickAtPosition(262, 157);
  }, 5000);
  setTimeout(() => {
    leftClickAtPosition(48, 135);
  }, 7000);
  setTimeout(() => {
    leftClickAtPosition(262, 157);
  }, 9000);
  setTimeout(() => {
    leftClickAtPosition(48, 135);
  }, 11000);
  setTimeout(() => {
    leftClickAtPosition(262, 157);
  }, 13000);
  setTimeout(() => {
    leftClickAtPosition(48, 135);
  }, 15000);

  res.send("SERVER");
});

// Middleware to handle any other errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
