const express = require("express");
const { route } = require("./swagger");
const router = express.Router();

//connect to the previous files
router.use("/", require("./swagger"));
router.use("/user", require("./user"));
router.use("/wmemberlist", require("./wmemberlist"));
router.use("/auth", require("./auth"));

//Handlebars
//@desc Login/Landing page
// @route GET /
router.get("/", (req, res) => {
	res.render("login", {
		layout: "login",
	});
});

// @desc Dashboard
// @route GET /dashboard

router.get("/dashboard", (req, res) => {
	res.render("dashboard");
});

module.exports = router;
