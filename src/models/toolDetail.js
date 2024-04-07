const mongoose = require("mongoose");

const toolDetailSchema = new mongoose.Schema(
  {
    toolImg: String,
    title: String,
    subTitle: String,
    createdBy: String,
    description: String,
    companyImg: [String],
    keyword: String,
    content: String,
    verificationMethod: [
      {
        name: String,
        description: String,
      },
    ],
    exampleContent: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("ToolDetail", toolDetailSchema, "too_details");
