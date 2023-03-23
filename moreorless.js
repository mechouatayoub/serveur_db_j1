const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
  let number = 12;
  let result = { message: "Non calculé" };
  console.log(req.query.num);

  console.log(typeof req.query.num);

  if (number === req.query.num) {
    result.message = "C'est gagné";
  } else if (number > req.query.num) {
    result.message = "C'est moins";
  } else if (number < req.query.num) {
    result.message = "C'est plus";
  } else {
    result.message = "Veuillez saisir un numéro entre 0 et 100";
  }
  console.log(result);
  res.status(200).json(result);
});

module.exports = router;
