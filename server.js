const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");

// Log config
dotenv.config({ path: ".env" });

// Passport config
require("./config/passport")(passport);

const app = express();
const PORT = process.env.PORT || 8080;

//Logging
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

// Handlebars
app.engine(".hbs", exphbs.engine({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");

//Sessions
app.use(
	session({
		secret: "keyboard cat",
		resave: false,
		saveUninitialized: false,
		store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
	})
);

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(cors())
	.use(bodyParser.json())
	.use((req, res, next) => {
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader(
			"Access-Control-Allow-Headers",

			"Origin, X-Requested-With, Content-Type, Accept, Z-Key"
		);

		res.setHeader(
			"Access-Control-Allow-Methods",
			"GET, POST, PUT, DELETE, OPTIONS"
		);
		next();
	});

//Mongo DB and Server
const db = require("./models");
db.mongoose
	.connect(db.url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(PORT, () => {
			console.log(
				`DB Connected and Server running in ${process.env.NODE_ENV} mode on port ${PORT}.`
			);
		});
	})
	.catch((err) => {
		console.log("Cannot connect to the database!", err);
		process.exit();
	});

// Static folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./routes"));
