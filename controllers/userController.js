const db = require('../database');
const bcrypt = require('bcryptjs');

exports.getAllUsers = async (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};
exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};
exports.createUser = async (req, res) => {
  try {
    let { username, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 12);

    // const token = jwt.sign({});

    db.query(`INSERT INTO ACCOUNTS(username, password) VALUES(? , ?)`, [
      username,
      encryptedPassword,
    ]);

    res.status(200).json({
      status: 'Success',
      message: 'Your account has been created',
    });

    // db.connect(function (err) {
    //   if (err) throw err;

    //   db.query(
    //     'SELECT * FROM accounts WHERE username = ?',
    //     [username],
    //     function (error, results, fields) {
    //       if (err) throw err;

    //       const data = {
    //         id: results[0].id,
    //         username: results[0].username,
    //       };

    //       res.status(200).json({
    //         status: 'Success',
    //         message: 'Your account has been created',
    //         data,
    //       });
    //     }
    //   );
    // });
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      res.status(409).json({
        code: '9996',
        status: 'Failed',
        message: 'This account existed',
      });
    } else {
      res.status(400).json({
        status: 'Failed',
        message: err,
      });
    }
  }
};
exports.updateUser = (req, res) => {
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
