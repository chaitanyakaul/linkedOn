const express = require('express');
const router = express.Router();

//as
//import controller file
import * as userController from '../controllers/user.server.controller';


router.route('/')
  .get(userController.getUsers)
  .post(userController.addUser)
  .put(userController.updateUser);


router.route('/:id')
  .get(userController.getUser)
  .delete(userController.deleteUser);


module.exports = router;
