const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/dataBase");

// Handle Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log("Shutting down due to uncaught exception");
  process.exit(1);
});

// Configure dotenv
dotenv.config({ path: "Backend/config/config.env" });

// Connect to database
connectDatabase();

const server = app.listen(process.env.port, () => {
  console.log(`Server is running on port http://localhost:${process.env.port}`);
});

// Unhandled Promise Rejcetion
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Unhandled Promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});
