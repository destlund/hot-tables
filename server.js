var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");

var app = express();
var PORT = 3000;

app.use(express.static(__dirname))




app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);

});
