var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static("public"));

app.get("/", function(req, res) {
    console.log("Hi");
});

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
});
  