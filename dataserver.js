'use strict';
var express     = require('express');
var path        = require('path');
var bodyp       = require('body-parser');
var app         = express();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');


//the controller(s).
var pingController    = require('./controllers/ping-controller');
var dbController    = require('./controllers/db-controller');

app.use(express.static('./public'));
app.use(bodyp.urlencoded({ extended: false }));
//mongodb://admin:admin@ds057254.mongolab.com:57254/platerate
var dev_connection_string = 'mongodb://localhost:27017/platerate';
var connection_string =  process.env.DB_PR || dev_connection_string;
// TEST print env vars.
console.log("connection_string = " + connection_string);

var db;
// Initialize connection once
MongoClient.connect(connection_string, function(err, database) {
  if(err) throw err;
  console.log("ROOT: Connected correctly to server.");
  db = database;
});


// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    req.myParisite = {'left':'right'};
    next();
});



app.set('trust proxy', true);

// for testing.!!!
app.all ('/ping', bodyp.json(), pingController.ping);
app.get ('/db', dbController.getAd);



/**
 * Start the web server.
 */
app.listen(3000, function () {
  console.log('Data vail app listening on port 3000!');
});
