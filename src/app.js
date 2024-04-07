const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");

const swaggerSpec = require("./config/swagger");

const app = express();
const PORT = 8000;

// "/" 경로에 대한 GET 요청 처리
app.get("/api", (req, res) => {
  res.send("hello teo-sprint-17-9team!!");
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
