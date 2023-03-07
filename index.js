const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();

const route = require("./routes");

app.use("/api", route);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
