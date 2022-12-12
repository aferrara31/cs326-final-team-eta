const express = require("express");
const userController = require("../controllers/mainposts");
const router = express.Router();
router.get("/add", userController.addPostGet);
router.post("/add", userController.addPost);
module.exports = router;