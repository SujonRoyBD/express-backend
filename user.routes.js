const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const router = express.Router();

// Middleware
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Home Route
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "trangleBase", "index.html"));
});

// Static Routes
router.get("/trangle", (req, res) => {
  res.sendFile(path.join(__dirname, "trangleBase", "trangle.html"));
});

router.post("/trangle", (req, res) => {
  const { height, base } = req.body;
  const area = 0.5 * parseFloat(base) * parseFloat(height);
  res.send(`Triangle area: ${area}`);
});

// API Routes
router.get("/api/user", (req, res) => {
  res.json([
    {
      name: "k bloe dive vai",
      roll: "f5555",
    }
  ]);
});

router.get("/login", (req, res) => {
  res.send("logins");
});

router.get("/resister", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views", "resister.html"));
});

router.get("/home", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views", "home.html"));
});

// Query Params
router.get("/id", (req, res) => {
  const { id, name } = req.query;
  res.send(`ID: ${id}, Name: ${name}`);
});

// URL Params
router.get("/userId/:id/userAge/:age", (req, res) => {
  const { id, age } = req.params;
  res.send(`User ID: ${id}, Age: ${age}`);
});

// 404 handler (must be last)
router.use((req, res) => {
  res.status(404).send("Route not found");
});

module.exports = router;
