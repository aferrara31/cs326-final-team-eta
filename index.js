const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

const { Pool } = require("pg");
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("pages/HomePage"))
  .get("/db", async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query("SELECT * FROM userinfo");
      const results = { results: result ? result.rows : null };
      res.render("pages/db", results);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  .get("/login", (req, res) => res.render("pages/LoginPage"))
  .get("/register", (req, res) => res.render("pages/RegistrationPage"))
  .post("/register", (req, res) => {
    const { name, email, password } = req.body;
    pool.query(
      "SELECT email FROM userinfo WHERE email = $1",
      [email],
      async (error, results) => {
        if (error) {
          console.log(error);
        }
        if (res.length > 0) {
          return results.render("register", {
            message: "This email is already in use",
          });
        }
      }
    );
    pool.query(
      "INSERT INTO userinfo (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, password],
      (error, results) => {
        if (error) {
          throw error;
        } else {
          return results.render("pages/LoginPage", {
            message: "User registered",
          });
        }
      }
    );
  })
  .get("/learning", (req, res) => res.render("pages/LearningPage"))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
