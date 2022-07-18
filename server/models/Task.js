// models/Book.js

const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  due_date: {
    type: String,
  },
  priority: {
    type: Number
  }
});

module.exports = Task = mongoose.model('Task', TaskSchema);