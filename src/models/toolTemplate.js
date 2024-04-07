const mongoose = require("mongoose");

const toolTemplateSchema = new mongoose.Schema(
  {
    toolName: { type: String, required: true },
    ideaOverview: { type: String, required: true },
    thinkBackground: { type: String, required: true },
    marketTheory: { type: String, required: true },
    bigxyzTheory: { type: String, required: true },
    smallxyzTheory: { type: String, required: true },
    pretotypePlan: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "ToolTemplate",
  toolTemplateSchema,
  "tool_templates"
);
