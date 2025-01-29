// Importing required modules
const express = require("express"); // Express framework for building web applications
const mysql = require("mysql2"); // MySQL client for Node.js
const cors = require("cors"); // Middleware for enabling CORS (Cross-Origin Resource Sharing)
const dotenv = require("dotenv"); // Module to load environment variables from a .env file

// Load environment variables from the .env file
dotenv.config();

// Initialize the Express application
const app = express();

// Enable CORS to allow cross-origin requests
app.use(cors());

// Create a connection to the MySQL database using credentials from environment variables
const db = mysql.createConnection({
  host: process.env.DB_HOST, // Database host
  user: process.env.DB_USER, // Database username
  password: process.env.DB_PASSWORD, // Database password
  database: process.env.DB_NAME, // Database name
});

// Define a GET route for the root URL ("/")
app.get("/", (req, res) => {
  return res.json("From Backend Side"); // Respond with a JSON message
});

// Define a GET route for the "/jewelry" endpoint
app.get("/jewelry", (req, res) => {
  const sql = "SELECT * FROM jewelry"; // SQL query to select all rows from the 'jewelry' table
  db.query(sql, (err, data) => {
    if (err) return res.json(err); // If there's an error, respond with the error
    return res.json(data); // Otherwise, respond with the query result
  });
});

// Start the server and listen on port 8081
app.listen(8081, () => {
  console.log("listening"); // Log a message when the server starts
});
