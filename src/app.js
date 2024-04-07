const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const toolDetailRoutes = require("./routes/toolDetailRoutes");

dotenv.config({ path: path.join(__dirname, "../.env") });
const swaggerSpec = require("./config/swagger");

const app = express();

// MongoDB connection
mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@127.0.0.1:27017/STLab`,
  {
    // 다른 MongoDB 연결 옵션들을 필요에 따라 추가
  }
);

console.log("Connected to MongoDB :)");

// "/api" 경로에 대한 get 요청 테스트
app.get("/api", (req, res) => {
  res.send("hello teo-sprint-17-9team haha");
});

// Middleware
app.use(express.json());

// Swagger setup
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Tool Details API",
      version: "1.0.0",
      description: "API for managing tool details",
    },
  },
  apis: ["./routes/*.js"], // files containing annotations as above
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Use routes
app.use("/api/toolDetails", toolDetailRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
