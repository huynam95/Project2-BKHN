const db = require('../database');

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  const usernameCheck = await db
    .promise()
    .query(`SELECT username FROM accounts WHERE username = '${username}'`);

  const passwordCheck = await db
    .promise()
    .query(`SELECT password FROM accounts WHERE username = '${username}'`);

  const usernameInDB = usernameCheck[0][0].username;
  const passwordInDB = passwordCheck[0][0].password;

  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};
