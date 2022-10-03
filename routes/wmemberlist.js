const express = require("express");
const router = express.Router();

const memberController = require("../controllers/wmemberlist");

router.get("/", memberController.getAll);
router.get("/:id", memberController.getById);
router.post("/", memberController.create);
router.put("/:id", memberController.update);
router.delete("/:id", memberController.remove);

// router.post("/", memberController.createMember);

// router.delete("/:id", memberController.ease);

module.exports = router;
