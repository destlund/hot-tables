var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

//begin of array of tables
var tables = [
	{
		customerName: "phil",
		phoneNumber:"666-666-6666",
		customerEmail:"phil@phil.com",
		customerID:"Philly"
	}
]

var wait =

[{
	customerName: "Jenny",
	phoneNumber: "8675309",
	customerEmail: "jj@j.com",
	customerID: "jenny"
	}]


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



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);

});



// API to print reserved tables

app.get("/api/tables", function(req, res) {
	return res.json(tables);
  });

// API to print waitlist

app.get("/api/waitlist", function(req, res) {
	return res.json(wait);
  });

// Take new tables from reserve form, and push them to the tables array


	//adding new table
	app.post("api/new", function(req,res){

		var newTable = req.body;
		//add the json that was added to array
		tables.push(newTable);
		//display json
		res.json(newTable);

	});


// list reservations and waitlist on  the tables page
