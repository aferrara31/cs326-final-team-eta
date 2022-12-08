const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");
const doenv = require("dotenv");

const app = express();

doenv.config({
  path: "./.env",
});

const { Pool } = require("pg");
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", require("./routes/web"));
app.use("/auth", require("./routes/auth"));
app.get("/profile/:email", async function (req, res) {
  try {
    const client = await pool.connect();
    const result = await client.query(
      "SELECT * FROM userinfo where email = $1",
      [req.params["email"]]
    );
    const results = { results: result ? result.rows : null };
    res.render("pages/profile", results);
    client.release();
  } catch (err) {
    console.log(err);
    res.send("Error " + err);
  }
});
app
  .get("/db", async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query("SELECT * FROM userinfo;");
      const results = { results: result ? result.rows : null };
      res.render("pages/db", results);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
