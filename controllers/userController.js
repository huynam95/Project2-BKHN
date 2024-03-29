const db = require('../database');
const bcrypt = require('bcryptjs');

exports.getAllUsers = async (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};
exports.getUser = async (req, res) => {
  // console.log(req.session, '2');
  // console.log(req.params.id);

  let data = db.query(
    'SELECT * FROM accounts WHERE id = ?',
    [req.params.id],
    function (error, results, fields) {
      console.log(results);
      if (results.length > 0) {
        const data = {
          id: results[0].id,
          username: results[0].username,
          avatar: results[0].avatar || null,
          is_block: results[0].isBlock || null,
        };

        res.status(200).json({
          status: 'Success',
          message: 'Here your profile',
          data,
        });
      } else {
        res.status(400).json({
          status: 'Failed',
          message: 'No user found',
        });
      }
    }
  );
};
exports.createUser = async (req, res) => {
  try {
    let { username, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 12);

    await db
      .promise()
      .query(`INSERT INTO ACCOUNTS(username, password) VALUES(? , ?)`, [
        username,
        encryptedPassword,
      ]);

    res.status(200).json({
      status: 'Success',
      message: 'Your account has been created',
    });
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY')
      res.status(409).json({
        code: '9996',
        status: 'Failed',
        message: 'This account existed',
      });
    else
      res.status(400).json({
        status: 'Failed',
        message: 'Something went wrong',
      });
  }
};
exports.updateUser = async (req, res) => {
  const currentUser = req.session.username;
  const currentId = 1;
  const id = await db
    .promise()
    .query('SELECT id FROM accounts WHERE username = ?', [currentUser]);

  console.log(id[0].id);

  // const queryUpdate = 'UPDATE accounts ' + 'SET username = ?' + 'WHERE id = ?';

  // db.query(queryUpdate, [req.body.username, req.session.id]);

  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};
