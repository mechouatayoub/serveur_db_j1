const express = require("express");
const router = express.Router();
const data = require("./pointscollectesapins.json");

router.get("", (req, res) => {
  let result = [];
  let district = req.query.district;
  for (let i = 0; i < data.length - 1; i++) {
    if (district == data[i].fields.arrdt) {
      result.push({
        garden: data[i].fields.jardin,
        address: data[i].fields.adresse,
        district: district,
      });
    }
  }
  res.status(200).json(result);
});

module.exports = router;
