var express = require('express');
var router = express.Router();

var User = require('../models/user');

//localhost:6001/api/users 
router.route('/users')

  // create a bear (accessed at POST http://localhost:8080/api/bears)
  .post(function (req, res) {

    var userIn = new User(req.body.data);      // create a new instance of the Bear model

    // save the bear and check for errors
    userIn.save(function (err) {
      if (err)
        res.send(err);

      res.json({ message: 'User created!' });
    });

  })
  // get all the bears (accessed at GET http://localhost:60001/api/users)
  .get(function (req, res) {
    User.find(function (err, userIn) {
      if (err)
        res.send(err);

      res.json(userIn);
    });
  });

router.route('/bears/:bear_id')

  // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
  .get(function (req, res) {
    User.findById(req.params.bear_id, function (err, userIn) {
      if (err)
        res.send(err);
      res.json(userIn);
    });
  })
  .put(function (req, res) {

    // use our bear model to find the bear we want
    User.findById(req.params.bear_id, function (err, userIn) {

      if (err)
        res.send(err);

      userIn.name = req.body.name;  // update the bears info

      // save the bear
      userIn.save(function (err) {
        if (err)
          res.send(err);

        res.json({ message: 'Bear updated!' });
      });

    });
  })
  .delete(function (req, res) {
    User.remove({
      _id: req.params.bear_id
    }, function (err, userIn) {
      if (err)
        res.send(err);

      res.json({ message: 'Successfully deleted' });
    });
  });

module.exports = router;