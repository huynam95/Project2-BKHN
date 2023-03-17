const express = require('express');
const userController = require('./../controllers/userController');
const loginController = require('./../controllers/loginController');

const router = express.Router();

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router.route('/').patch(userController.updateUser);

router
  .route('/:id')
  .get(loginController.protect, userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
