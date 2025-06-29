const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./db"); // Assuming you have a db.js file for database connection
require("dotenv").config();

const port = process.env.PORT || 3000;
app.use(bodyParser.json());
// Import the routes
const userRoutes = require("./routes/userRoutes");
const candidateRoutes = require("./routes/candidateRoutes");
app.use("/users", userRoutes);
app.use("/candidates", candidateRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
