const express = require("express");
const route = express.Router();
const { userActivityModel } = require("./mongooseConnection");

route.get("/userActivity", async (req, res) => {
  const { page = 1, limit } = req.query;
  try {
    const userActivityList = await userActivityModel
      .find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const counts = await userActivityModel.count();
    res.json({
      statusCode: 200,
      data: userActivityList,
      totalPages: Math.ceil(counts / limit),
      currentPage: page,
      successMessage: "Data fetched successfully",
    });
    const count = await userActivityModel.countDocuments({});
    console.log(count);
  } catch (err) {
    res.json({
      statusCode: 500,
      errorMessage: "Error in fetching the data",
    });
  }
});
module.exports = route;
