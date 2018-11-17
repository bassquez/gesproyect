"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var express = require("express");
var morgan = require("morgan");
var mongoose = require("mongoose");
var path = require("path");
var routes_1 = require("./routes");
var PORT = process.env.PORT || 3000;
var app = express();
exports.app = app;
dotenv.load({ path: '.env' });
app.use('/', express.static(path.join(__dirname, '../')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var mongodbURI;
if (process.env.NODE_ENV === 'prod') {
    mongodbURI = process.env.MONGODB_URI;
}
else {
    mongodbURI = process.env.MONGODB_DEV_URI;
    app.use(morgan('dev'));
}
mongoose.Promise = global.Promise;
mongoose.connect(mongodbURI, { useNewUrlParser: true })
    .then(function (db) {
    console.log('Connected to MongoDB');
    routes_1.default(app);
    app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname, '../index.html'));
    });
    if (!module.parent) {
        app.listen(PORT, function () { return console.log("Angular Full Stack listening on port " + PORT); });
    }
})
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=app.js.map