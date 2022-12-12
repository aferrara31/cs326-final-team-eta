const Pool = require('pg').Pool;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

exports.addPost = async (req, res) => {
  try{
    const {category, header} = req.body;
    const date = new Date();

    pool.query("INSERT INTO postinfo (header, category, created, modified) VALUES ($1, $2, $3, $3)",
      header, category, date, date,
      (error, result) => {});
  }catch(e){}
};