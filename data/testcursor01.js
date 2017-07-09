var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
    // wtf BSON = require('mongodb').pure().BSON,
    assert = require('assert');

var db = new Db('test', new Server('localhost', 27017));
// Establish connection to db
db.open(function(err, db) {
	
	// Grab a cursor using the find
    var cursor = db.collection('Should_correctly_rewind_and_restart_cursor').find({});
	  
	cursor.forEach( function(myDoc) {
		console.log( "\t* myDoc.a: " + myDoc.a ); 
	});
		
	cursor = db.collection('Should_correctly_rewind_and_restart_cursor').find({});		
	//cursor.rewind();
    // Fetch the first object off the cursor
    cursor.nextObject(function(err, item) {
		if (err) {
			console.log("err = ", err);
			return;
		}
		console.log(item);
		assert.equal(0, item.a)
        // Rewind the cursor, resetting it to point to the start of the query
        cursor.rewind();

        // Grab the first object again
        cursor.nextObject(function(err, item) {
		  console.log(item);
          assert.equal(0, item.a)

          db.close();
        })
    });
  
});