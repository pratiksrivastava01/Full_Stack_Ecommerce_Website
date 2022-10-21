const express = require("express");

const app = express();
const cookieParser = require("cookie-parser");

const ErrorHandler = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());

// Import all routes
const product = require("./Routes/productRoute");
const user = require("./Routes/userRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);

// Error Middleware
app.use(ErrorHandler);

module.exports = app;
