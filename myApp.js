require('dotenv').config();
let express = require('express');
let app = express();
absolutePath = __dirname +'/views/index.html';
let mego; 

app.use("/public", express.static(__dirname + "/public"));
app.get("/json", (req, res) => 
  {
    res.sendFile(absolutePath);
    let mes = "";
    if (process.env.MESSAGE_STYLE == "uppercase") {
      mes = "HELLO JSON";
    } else {
      mes = "Hello json";
    }
    res.json({ message: mes });
  });























 module.exports = app;
