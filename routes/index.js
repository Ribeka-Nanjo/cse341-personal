const express = require("express");
const router = express.Router();

//connect to the previous files
router.use("/", require("./swagger"));
router.use("/user", require("./user"));
router.use("/wmemberlist", require("./wmemberlist"));

module.exports = router;
