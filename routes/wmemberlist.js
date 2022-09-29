const express = require("express");
const router = express.Router();

const memberController = require("../controllers/wmemberlist");

router.post("/", memberController.createMember);

router.get("/", memberController.getMember);

router.get("/:id", memberController.getAll);

module.exports = router;
