var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

//begin of array of tables
var tables = [
	{
		routeName: "phil",
		name:"Phil Q. Customer",
		phoneNumber:"666-666-6666",
		email:"phil@phil.com",
		uniqueID:"Philly"
	},


];

app.use(express.static(__dirname))
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});


//adding new table
app.post("api/new", function(req,res){

	var newTable = req.body;
	//add the json that was added to array
	tables.push(newTable);
	//display json
	res.json(newTable);

});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);

});


// API to print the whole table with JSON


// API to print reserved tables


// API to print waitlist


// Take new tables from reserve form, and push them to the tables array


// list reservations and waitlist on  the tables page