const express = require("express");
const router = express.Router();
const covid_data = require("./covid.json");

router.get("", (req, res) => {
  let result = [];
  for (let i = 0; i < covid_data.length; i++) {
    console.log(covid_data[i]);
    result.push(format_data(covid_data[i]));
  }
  res.status(200).json(result);
});

router.get("/by-country", (req, res) => {
  let result = { message: "data not found" };
  let countryName = req.fields.country;

  for (let i = 0; i < covid_data.length - 1; i++) {
    if (covid_data[i].name === countryName) {
      result = format_data(covid_data[i]);
      break;
    }
  }

  res.status(200).json(result);
});

function format_data(data) {
  let result = { name: "", cases: 0, deaths: 0, recovered: 0 };
  result.name = data.name;
  result.cases = data.latest_data.confirmed;
  result.deaths = data.latest_data.deaths;
  result.recovered = data.latest_data.recovered;
  return result;
}

module.exports = router;
