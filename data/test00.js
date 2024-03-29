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
  var docs = [];

  // Insert 100 documents with some data
  for(var i = 0; i < 100; i++) {
    var d = new Date().getTime() + i*1000;
    docs[i] = {'a':i, createdAt:new Date(d)};
  }

  // Create collection
  db.createCollection('Should_correctly_rewind_and_restart_cursor', function(err, collection) {
    assert.equal(null, err);

    // insert all docs
    collection.insert(docs, {w:1}, function(err, result) {
      assert.equal(null, err);

      // Grab a cursor using the find
      var cursor = collection.find({});
      // Fetch the first object off the cursor
      cursor.nextObject(function(err, item) {
        assert.equal(0, item.a)
        // Rewind the cursor, resetting it to point to the start of the query
        cursor.rewind();

        // Grab the first object again
        cursor.nextObject(function(err, item) {
          assert.equal(0, item.a)

          db.close();
        })
      })
    })
  });
});