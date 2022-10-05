const express = require("express");

const app = express();

const ErrorHandler = require("./middleware/error");

app.use(express.json());

// Import all routes
const product = require("./Routes/productRoute");

app.use("/api/v1", product);

// Error Middleware
app.use(ErrorHandler);

module.exports = app;
