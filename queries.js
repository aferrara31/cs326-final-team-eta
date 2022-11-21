const getUsers = (request, response) => {
  pool.query("SELECT * FROM userInfo ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getUserById = (request, response) => {
  const name = parseInt(request.params.username);

  pool.query(
    "SELECT * FROM userInfo WHERE name = $1",
    [name],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createUser = (request, response) => {
  const { name, email, password } = request.body;

  pool.query(
    "INSERT INTO userInfo (name, email, password) VALUES ($1, $2, $3) RETURNING *",
    [name, email, password],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.redirect("pages/LoginPage");
    }
  );
};

module.exports = {
  getUserById,
  createUser,
  getUsers,
};
