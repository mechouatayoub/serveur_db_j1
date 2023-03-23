const express = require("express");
const app = express();
const formidable = require("express-formidable");
const hexacolors = require("./hexacolor.js");
const moreorless = require("./moreorless.js");
const calculator = require("./calculator.js");
const covid = require("./covid19.js");

app.use(formidable());
app.use("/hexacolors", hexacolors);
app.use("/moreorless", moreorless);
app.use("/calculator", calculator);
app.use("/covid19", covid);

app.listen(3000, () => {
  console.log("server has started");
});
