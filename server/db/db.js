const mongoose = require('mongoose');

const dotenv = require('dotenv').config();

try {
  mongoose.connect("mongodb://localhost/template");
  console.log("Connected to MongoDB");
} catch (err) {
  console.log("Cannot connect to MongoDB with error : " + err);
}
