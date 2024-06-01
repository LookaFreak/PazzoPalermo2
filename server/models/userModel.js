const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Name is Required"],
  },
  email: {
    type: String,
    require: [true, "Email is required"],
  },
  password: {
    type: String,
    require: [true, "Password is Required"],
  },
  avatar: {
    type: String,
  },
});

const userModel = mongoose.model("user", UserSchema);

module.exports = userModel;
