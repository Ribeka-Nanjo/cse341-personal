const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv/config");

const port = process.env.PORT || 8080;
const app = express();

// app.get("/", (req, res) => {
// 	res.send("Hello World!");
// });

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

const db = require("./models");
db.mongoose
	.connect(db.url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(port, () => {
			console.log(`DB Connected and server running on ${port}.`);
		});
	})
	.catch((err) => {
		console.log("Cannot connect to the database!", err);
		process.exit();
	});

app.use("/", require("./routes"));

// app.listen(port);
// console.log(`Connected to DB and listening on ${port}`);
