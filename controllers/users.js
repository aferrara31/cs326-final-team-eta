const { Pool } = require("pg");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

exports.login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    let User = {
      email: email,
      userPass: "",
      id: "",
    };
    console.log(email, password);
    if (!email || !password) {
      return res.status(400).render("pages/index", {
        msg: "Please Enter Your Email and Password",
        msg_type: "error",
      });
    }

    pool.query(
      "select * from userinfo where email= $1",
      [email],
      async (error, result) => {
        console.log(result);
        if (result.length <= 0) {
          return res.status(401).render("pages/index", {
            msg: "Please Enter Your Email and Password",
            msg_type: "error",
          });
        } else {
          User.userPass = result.rows[0].password;
          if (!(await bcrypt.compare(password, User.userPass))) {
            return res.status(401).render("pages/index", {
              msg: "Please Enter Your Email and Password",
              msg_type: "error",
            });
          } else {
            /*
            User.id = result.rows[0].id;
            const token = jwt.sign({ id: User.id }, process.env.JWT_SECRET, {
              expiresIn: process.env.JWT_EXPIRES_IN,
            });
            console.log("The Token is " + token);
            const cookieOptions = {
              expires: new Date(
                Date.now() +
                  process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
              ),
              httpOnly: true,
            };
            res.cookie("joes", token, cookieOptions);
            */
            res.status(200).redirect("/home");
          }
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};
exports.register = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  console.log(name);
  pool.query(
    "select email from userinfo where email= $1",
    [email],
    async (error, result) => {
      if (error) {
        confirm.log(error);
      }

      if (result.length > 0) {
        return res.render("pages/register", {
          msg: "Email id already Taken",
          msg_type: "error",
        });
      }
      let hashedPassword = await bcrypt.hash(password, 8);
      //console.log(hashedPassword);

      pool.query(
        "insert into userinfo (name, email, password) values ($1, $2, $3)",
        [name, email, hashedPassword],
        (error, result) => {
          if (error) {
            console.log(error);
          } else {
            //console.log(result);
            return res.render("pages/register", {
              msg: "User Registration Success, Please Login",
              msg_type: "good",
            });
          }
        }
      );
    }
  );
};

exports.isLoggedIn = async (req, res, next) => {
  if (req.cookies.joes) {
    try {
      const decode = await promisify(jwt.verify)(
        req.cookies.joes,
        process.env.JWT_SECRET
      );
      console.log(decode);
      pool.query(
        "select * from userinfo where id= $1",
        [decode.id],
        (err, results) => {
          console.log(results);
          if (!results) {
            return next();
          }
          req.user = results[0];
          return next();
        }
      );
    } catch (error) {
      console.log(error);
      return next();
    }
  } else {
    next();
  }
};

exports.logout = async (req, res) => {
  res.cookie("joes", "logout", {
    expires: new Date(Date.now() + 2 * 1000),
    httpOnly: true,
  });
  res.status(200).redirect("/");
};
