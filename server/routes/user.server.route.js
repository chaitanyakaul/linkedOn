const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;


//import controller file
import * as userController from '../controllers/user.server.controller';


router.route('/')
  .get(userController.getUsers)
  .post(userController.addUser)
  .put(userController.updateUser);


router.route('/:id')
  .get(userController.getUser)
  .delete(userController.deleteUser);







///**** Old Code



// Connect
const connection = (closure) => {
  return MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) return console.log(err);
    var db = client.db('mean');
    closure(db);
  });
};

// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};

// Get users
router.get('/users', (req, res) => {
  connection((db) => {
    db.collection('users')
      .find()
      .toArray()
      .then((users) => {
        console.log(users)
        response.data = users;
        res.json(response);
      })
      .catch((err) => {
        sendError(err, res);
      });
  });
});


module.exports = router;
