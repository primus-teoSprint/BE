const ToolDetail = require("../models/toolDetail");

// exports.getAllToolDetails = async (req, res) => {
//   res.send("hello teo-sprint-17-9team haha");
//   try {
//     const toolDetails = await ToolDetail.findAll({});
//     res.status(200).json(toolDetails);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

exports.getAllToolDetails = async (req, res) => {
  try {
    // Extract query parameters
    const {
      page = 1,
      perPage = 10,
      field = "id",
      order = "ASC",
      q,
    } = req.query;

    // Parse q and save in filter
    let filter = {};
    if (q && q !== "undefined") {
      filter = JSON.parse(q);

      // Use regular expressions for string searches on specific fields
      for (const key in filter) {
        filter[key] = { $regex: new RegExp(filter[key], "i") };
      }
    }

    // Calculate the sorting order
    const sortOrder = order.toLowerCase() === "asc" ? 1 : -1;

    // Pagination logic
    const skipOptions = (page - 1) * perPage;

    // Database query
    const toolDetails = await ToolDetail.find(filter)
      .sort({ [field]: sortOrder })
      .skip(skipOptions)
      .limit(parseInt(perPage));

    // Count total documents for pagination
    const total = await ToolDetail.countDocuments(filter);

    // Send response
    res.status(200).json({
      data: toolDetails,
      total: total,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
