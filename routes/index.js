const express = require("express");
const { route } = require("./swagger");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//connect to the previous files
router.use("/", require("./swagger"));
router.use("/user", require("./user"));
router.use("/wmemberlist", require("./wmemberlist"));
router.use("/auth", require("./auth"));

//Handlebars
//@desc Login/Landing page
// @route GET /
router.get("/", ensureGuest, (req, res) => {
	res.render("login", {
		layout: "login",
	});
});

// @desc Dashboard
// @route GET /dashboard

router.get("/dashboard", ensureAuth, (req, res) => {
	console.log(req.user);
	res.render("dashboard");
});

module.exports = router;
