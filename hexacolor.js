const express = require("express");
const router = express.Router();
const colors = require("./colors.json");

router.get("", (req, res) => {
  let result = { message: "color not found" };
  let search = colors[req.query.color];
  if (search) {
    result = { color: req.query.color, code: search };
  }
  res.status(200).json(result);
});

module.exports = router;
