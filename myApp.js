let process =require('dotenv').config();
let express = require('express');
let app = express();
let absolutePath = __dirname + '/views/index.html';

app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

app.get("/json", (req, res) => {
  let mes = "";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    mes = "HELLO JSON";
    console.log(mes);
  } else {
    mes = "Hello json";
  }
  res.json({ message: mes });
});

module.exports = app;