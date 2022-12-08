const express = require("express");
const router = express.Router();
const userContoller = require("../controllers/users");

router.get(["/", "/login"], (req, res) => {
  res.render("pages/index");
});

router.get("/register", (req, res) => {
  res.render("pages/register");
});

router.get("/home", (req, res) => {
  res.render("pages/HomePage");
});

router.get("/learning", (req, res) => {
  res.render("pages/LearningPage");
});


module.exports = router;
