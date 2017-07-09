var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

//the controller(s).
//var pingController    = require('./controllers/ping-controller');
var dbController    = require('../controllers/db-controller');

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

  //
  //testGetAd(db);
  testMyCursGetAd(db);

  //setTimeout(function(){console.log('Exiting'); process.exit(0)},  1);
  //process.exit(0);
  //dbController.getAd();
});

console.log("the end");

function testGetAd(db) {
	console.log('testGetAd(db) begin');
	//return;

	db.collection('testData').find({}, 
        {name:1, _id:1, id:1, img:1}).toArray(function(err, results){
            assert.equal(null, err);
            console.log(results); // output all records

            //res.json(results);
    });

    console.log('testGetAd(db) end');
}


function testMyCursGetAd(db) {
	//var myCursor = db.users.find( { type: 2 } );

	db.collection('testData').find().limit(3).forEach( function(myDoc) 
		{console.log( "Name: " + myDoc.name ); } );

	

	var myCursor = db.collection('testData').find({}).limit(2);
	myCursor.forEach( function(myDoc) 
		{
			console.log( "\t* Name: " + myDoc.name ); } );

	// var aaa= db.collection('testData').find().map( function(u) { return u.name; } );
	// console.log("aaa = ", aaa);
	return;


	var documentArray = myCursor.toArray();
	console.log(documentArray);

	// while (myCursor.hasNext()) {
	// 	console.log((myCursor.next()));
	// }

	console.log('end testMyCursGetAd');
}


/****
use Nothwind
db.orders.find({},{}).pretty()

*****/