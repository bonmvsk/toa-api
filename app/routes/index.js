var express = require('express');
var router = express.Router();

var bear = require('./bearRoute');

module.exports = {
  init: function (app) {
    // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
    router.get('/', function (req, res) {
      res.json({ message: 'hooray! welcome to our api!' });
    });

    router.use(bear);

    // REGISTER OUR ROUTES -------------------------------
    // all of our routes will be prefixed with /api
    app.use('/api', router);
  }
}