const express = require("express");
const cors = require("cors");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;
const { authenticateUser } = require("./userController");
const { getStudentByRegNumber } = require("./data/students");
app.use(cors());
app.use(express.json());

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Exam Management System API",
      version: "1.0.0",
      description: "API for exam management system",
    },
  },
  apis: ["./server.js"], // Path to the API routes and JSDoc comments
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// JSDoc comments for Swagger
/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Authenticate user
 *     description: Authenticate a user with a given username and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful authentication
 *         content:
 *           application/json:
 *             example:
 *               userName: admin
 *               fullName: Administrator
 *       401:
 *         description: Invalid credentials
 */
app.post("/api/login", async (req, res) => {
  const { userName, password } = req.body;
console.log("Received credentials:", userName, password);

  try {
    const user = await authenticateUser(userName, password);

    if (user) {
      res.json(user);
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during authentication:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /api/students:
 *   get:
 *     summary: Get student details
 *     description: Get details of a student based on registration number.
 *     parameters:
 *       - in: query
 *         name: regNumber
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful retrieval of student details
 *         content:
 *           application/json:
 *             example:
 *               name: John Doe
 *               exists: true
 *       404:
 *         description: Student not found
 */
app.get("/api/students", (req, res) => {
  const regNumber = req.query.regNumber;
  const student = getStudentByRegNumber(regNumber);

  if (student) {
    res.json(student);
  } else {
    res.json({ exists: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
