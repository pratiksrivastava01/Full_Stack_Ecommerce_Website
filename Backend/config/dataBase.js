const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // UseCreateIndex: true
    })
    .then((data) => {
      console.log(`MongoDB Connected successfully: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
