require('dotenv').config();  // Laden Sie dotenv, ohne eine Variable zuzuweisen
let bodyparser = require('body-parser');
let express = require('express');
let app = express();
let absolutePath = __dirname + '/views/index.html';

function middleware(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
  }

app.use(bodyparser.urlencoded({extended: false}));
app.use("/public", express.static(__dirname + "/public"));
app.use(middleware);

app.post("/name", function(req, res) {
  res.json({ name: `${req.body.first} ${req.body.last}` });
  
}
);
app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

app.get("/json", (req, res) => {
  let mes = process.env.MESSAGE_STYLE === "uppercase" ? "HELLO JSON" : "Hello json";
  console.log(mes);  // Die Nachricht wird in der Konsole angezeigt
  res.json({ message: mes });
});

app.get("/now", function(req,res,next){
  req.time = new Date().toString();
  next();
},function(req,res){
  res.json({time: req.time});
});

app.get("/:word/echo", function(req,res){
  res.json({echo: req.params.word});
});

app.get("/name", function(req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;
  res.json({
    name: `${firstName} ${lastName}`
  });
});

module.exports = app;