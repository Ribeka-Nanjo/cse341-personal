const express = require("express");
const router = express.Router();

const memberController = require("../controllers/wmemberlist");

router.post("/", memberController.createMember);

router.get("/:id", memberController.getMember);

router.get("/", memberController.getAll);

module.exports = router;
