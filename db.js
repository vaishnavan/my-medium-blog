const mongoose = require("mongoose");

const db = () => {
  mongoose.set("strictQuery", true);
  mongoose.connect(process.env.MONGODB_URL, (err) => {
    if (!err) {
      console.log("Database connected successfully");
    } else {
      console.log(err);
    }
  });
};

module.exports = {
  db,
};
