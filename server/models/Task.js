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
    type: String,
  },
  priority: {
    type: Number,
  },
  id: {
    type: String,
  },
});

module.exports = Task = mongoose.model("Task", TaskSchema);
