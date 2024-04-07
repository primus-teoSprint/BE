const express = require("express");
const router = express.Router();
const toolDetailController = require("../controllers/toolDetailController");

/**
 * @swagger
 * /api/toolDetails:
 *   get:
 *     summary: Returns a list of all tool details
 *     responses:
 *       200:
 *         description: A list of tool details
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ToolDetail'
 * components:
 *   schemas:
 *     ToolDetail:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         toolImg:
 *           type: string
 *         title:
 *           type: string
 *         subTitle:
 *           type: string
 *         createdBy:
 *           type: string
 *         description:
 *           type: string
 *         companyImg:
 *           type: array
 *           items:
 *             type: string
 *         keyword:
 *           type: string
 *         content:
 *           type: string
 *         verificationMethod:
 *           type: array
 *           items:
 *             type: object
 *         exampleContent:
 *           type: array
 *           items:
 *             type: string
 */
router.get("/", toolDetailController.getAllToolDetails);

module.exports = router;
