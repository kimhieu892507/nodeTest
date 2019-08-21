"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); //let express = require("express");

var hostname = "localhost";
var port = "8017";

app.get("/helloworld", function (req, res) {
    res.send("<h1>Hello World!!!!</h1>");
});

app.listen(port, hostname, function () {
    console.log("Good morning!!!, I'm running at " + hostname + ":" + port + "/");
});