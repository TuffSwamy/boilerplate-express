require('dotenv').config();  // Laden Sie dotenv, ohne eine Variable zuzuweisen
let express = require('express');
let app = express();
let absolutePath = __dirname + '/views/index.html';

function middleware(req, res, next) {
  console.log("${req.method} ${req.path} - ${req.ip}");
  next();
  }

app.use("/public", express.static(__dirname + "/public"));
app.use(middleware);

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

app.get("/json", (req, res) => {
  let mes = process.env.MESSAGE_STYLE === "uppercase" ? "HELLO JSON" : "Hello json";
  console.log(mes);  // Die Nachricht wird in der Konsole angezeigt
  res.json({ message: mes });
});
