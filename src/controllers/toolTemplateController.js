const ToolTemplate = require("../models/toolTemplate");

exports.createTemplate = async (req, res) => {
  try {
    const template = new ToolTemplate(req.body);
    await template.save();
    res
      .status(201)
      .json({ message: "검증툴 작성이 완료되었습니다.", template });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
