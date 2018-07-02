const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'

const dbName = 'SystemDesignCapstoneMongo'

let db

MongoClient.connect(url, function(err, client) {
  if (err) {
    console.log('error in db connection', err)
  }
  console.log('Connected successfully to server from database')
  //create tables here
  //createCollection('name', callback(err, client))
  db = client.db(dbName)

  db.createCollection("question", function(err, client) {
    if (err) {
      console.log('error in question collection create', err)
    }
    console.log('Successfully made question collection')
  })

  db.createCollection("user", function(err, client) {
    if (err) {
      console.log('error in user collection create', err)
    }
    console.log('Successfully made user collection')
  })

  //client.close()
})

function dbExport () {
  return db
}

module.exports = dbExport