const Pool = require('pg').Pool;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const addPost = (req, res) => {

};

const upvote = (req, res) => {
  const {pid} = req.body;

  pool.query("UPDATE postinfo SET upvote = $2 WHERE id = $1", 
    [pid, upvote], (error, results) => {
      res.render("")
    });
  
};

const downvote = (req, res) => {

};

const removePost = (req, res) => {

};

const editPost = (req, res) => {

};