//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.get("/", function(req, res) {
  var today = new Date();
  const currentDay = today.getDay();

  if (currentDay === 6 || currentDay === 0) {
    res.send("<h1>Today is weekend! Take rest<h1>");
  } else {
    res.sendFile(__dirname + "/index.html");
  }

});

app.listen(3000, function() {
  console.log("Server is listening at 3000");
});
