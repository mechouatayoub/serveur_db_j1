const express = require("express");
const app = express();
const formidable = require("express-formidable");
const hexacolors = require("./hexacolor.js");
const moreorless = require("./moreorless.js");
const calculator = require("./calculator.js");

app.use(formidable());
app.use("/hexacolors", hexacolors);
app.use("/moreorless", moreorless);
app.use("/calculator", calculator);

app.listen(3000, () => {
  console.log("server has started");
});
