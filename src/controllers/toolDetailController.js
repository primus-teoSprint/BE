const ToolDetail = require("../models/toolDetail");

exports.getAllToolDetails = async (req, res) => {
  try {
    const toolDetails = await ToolDetail.find({});
    res.json(toolDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
