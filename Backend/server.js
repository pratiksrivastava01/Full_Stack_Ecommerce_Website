const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/dataBase");

// Configure dotenv
dotenv.config({ path: "Backend/config/config.env" });

// Connect to database
connectDatabase();

app.listen(process.env.port, () => {
  console.log(`Server is running on port http://localhost:${process.env.port}`);
});
