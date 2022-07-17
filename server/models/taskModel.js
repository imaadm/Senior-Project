const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    assignedDate: { type: Date, default: Date.now, required: true },
    dueDate: { type: Date, required: true },
    priority: { type: Number, required: true },
  },
);

module.exports = Task = mongoose.model("task", TaskSchema);
