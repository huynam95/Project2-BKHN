const db = require('../database');

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
    const { username, password } = req.body;

    await db
      .promise()
      .query(`INSERT INTO ACCOUNTS VALUES('${username}', '${password}')`);

    res.status(200).json({
      status: 'Success',
      message: 'Your account has been created',
    });
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
        message: 'Something went wrong',
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
