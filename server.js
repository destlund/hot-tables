//Dependencies//


var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");

var tableArray = [
	{
		customerName: 'Charlie',
		customerEmail: 'charlie@gmail.com',
		customerID: 'charlie72',
		phoneNumber: '805-966-6780'

	}
];

var waitArray = [
	{
		customerName: 'Lisa',
		customerEmail: 'lisa@gmail.com',
		customerID: 'lisssa',
		phoneNumber: '805-241-2565'
		
	}
];
//Dependencies//

//Opening Express//
var app = express();
var PORT = 3000;
//Opening Express//

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static(__dirname))
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

// backend API to display the full table set (both tables and waitlist) in JSON


// backend API to display reservations in JSON


// backend API to display waitlist in JSON





// take the input from the reserve form and use the table constructor to create a table object


// depending on how many tables are already reserved, add it to the reservation list or the waitlist


// replace stuff in the table list on the tables page to display regular tables


// replace stuff in the waitlist on the tables page to display the waitlist

