// call the packages we need
var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var uri = 'mongodb://localhost/training';
var options = {
  useMongoClient: true
}
mongoose.connect(uri, options, (err) => {
  if (err) {
    console.log(err.message);
    console.log(err);
  }
  else {
    console.log('Connected to MongoDb');
  }
});

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var route = require('./app/routes');
route.init(app);

var port = process.env.PORT || 6001;        // set our port



// START THE SERVER
// =============================================================================
app.listen(port);
console.log(`Server is running on port : ${port}`);