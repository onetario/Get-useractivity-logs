const mongoose = require("mongoose");

const conn = mongoose.connect(`${process.env.DB_URL}/inextlabs-devtest`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
// console.log(connection);
connection.on("connected", () => {
  console.log("Database connected");
});
connection.on("error", () => {
  console.log("error in connecting to database");
});

const {userActivityModel} = require("./userActivityModel");

module.exports = {
  userActivityModel,
};
