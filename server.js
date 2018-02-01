//Dependencies//


var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//Dependencies//

//Opening Express//
var app = express();
var PORT = 3000;
//Opening Express//

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});




app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);

});
