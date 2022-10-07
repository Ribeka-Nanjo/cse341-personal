const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

router.get("/", userController.getAll);

router.get("/:id", userController.getById);

router.post("/", userController.create);

module.exports = router;
