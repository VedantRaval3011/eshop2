const mongoose = require("mongoose");

var mongoDBURL =
  "mongodb+srv://vedant:vedant@cluster0.5iixret.mongodb.net/eshop";

mongoose.connect(mongoDBURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

var dbconnect = mongoose.connection;

dbconnect.on("error", () => {
  console.log(`Mongo DB Connection Failed`);
});

dbconnect.on("connected", () => {
  console.log(`Mongo DB Connection Successfull`);
});

module.exports = mongoose;
