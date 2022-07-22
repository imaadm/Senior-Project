// models/Book.js

const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
  },
  due_date: {
    type: Date,
    required: true
  },
  priority: {
    type: Number,
  },
  key: {
    type: String,
  }

});

module.exports = Task = mongoose.model("Task", TaskSchema);
