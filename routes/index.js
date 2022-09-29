const express = require("express");
const router = express.Router();

//connect to the previous files
router.use("/", require("./swagger"));
router.use("/", require("./user"));
router.use("/", require("./wmemberlist"));

module.exports = router;
