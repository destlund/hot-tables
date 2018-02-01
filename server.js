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

// take the input from the reserve form and use the table constructor to create a table object


// depending on how many tables are already reserved, add it to the reservation list or the waitlist


// replace stuff in the table list on the tables page to display regular tables


// replace stuff in the waitlist on the tables page to display the waitlist

