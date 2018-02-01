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
