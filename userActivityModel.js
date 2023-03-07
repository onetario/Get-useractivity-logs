const mongoose = require("mongoose");
const userActivitySchema = new mongoose.Schema(
  {
    _id: {
      type: String,
    },
    action: {
      type: String,
    },
    module: {
      type: String,
    },
    emailid: {
      type: String,
    },
  },
  {
    versionKey: false,
    strict: false,
  }
);

const userActivityModel = mongoose.model(
  "useractivity-logs",
  userActivitySchema
);
module.exports = { userActivityModel };
