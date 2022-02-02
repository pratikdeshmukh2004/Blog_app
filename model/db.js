
const mongoose = require("mongoose");
const con = require("../config/con")
const logIN = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
  },
});

User = mongoose.model("user", logIN);
module.exports = {User}