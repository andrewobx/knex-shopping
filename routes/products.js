const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/", (req, res) => {
  res.send("Products page");
});

module.exports = router;
