const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.theme = require("./user.js")(mongoose);
db.user = require("./wmemberlist.js")(mongoose);

module.exports = db;
