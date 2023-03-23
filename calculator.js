const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
  let operator = req.fields.operator;
  let num1 = req.fields.num1;
  let num2 = req.fields.num2;
  let result = { message: "opérateur méconnu" };

  if (operator == "+") {
    result.message = num1 + num2;
  } else if (operator == "*") {
    result.message = num1 * num2;
  } else if (operator == "/") {
    result.message = num1 / num2;
  } else if (operator == "-") {
    result.message = num1 - num2;
  } else {
    result.message = "opérateur méconnu";
  }

  res.status(200).json(result);
});

module.exports = router;
