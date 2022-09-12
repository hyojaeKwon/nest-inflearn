"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_model_1 = require("./app.model");
var app = express();
var port = 8000;
app.use(function (req, res, next) {
    console.log("this is logging middle ware");
    console.log(req.rawHeaders[1]);
    next();
});
app.get("/", function (req, res) {
    console.log(req);
    res.send({ cats: app_model_1.Cat });
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
//# sourceMappingURL=app.js.map