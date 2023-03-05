const db = require('../database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  if (username && password) {
    // Execute SQL query that'll select the account from the database based on the specified username and password
    db.query(
      'SELECT * FROM accounts WHERE username = ?',
      [username],
      async function (error, results, fields) {
        console.log(results[0].username, results[0].password);
        const verified = await bcrypt.compare(password, results[0].password);

        // If there is an issue with the query, output the error
        if (error) throw error;
        // If the account exists
        if (results.length > 0 && verified) {
          // Authenticate the user
          // req.session.loggedin = true;
          // req.session.username = username;

          const accessToken = jwt.sign(
            {
              id: results[0].id,
            },
            'access_secret_no_one_can_know_about_this',
            { expiresIn: 60 * 60 }
          );

          res.cookie('accessToken', accessToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000, //equivalent to 1 day
          });

          const data = {
            token: accessToken,
            id: results[0].id,
            username: results[0].username,
            avatar: '',
            is_block: '',
          };

          res.status(200).json({
            status: 'Success',
            message: 'Logged in',
            data,
          });
        } else {
          res.send('Incorrect Username and/or Password!');
        }
        res.end();
      }
    );
  } else {
    res.send('Please enter Username and Password!');
    res.end();
  }
};
