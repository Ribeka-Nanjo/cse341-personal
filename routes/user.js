const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

router.get("/", userController.getAlluser);

router.get("/:id", userController.getUser);

router.post("/", userController.create);

module.exports = router;
