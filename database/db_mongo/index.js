const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'

const dbName = 'SystemDesignCapstoneMongo'

MongoClient.connect(url, function(err, client) {
  if (err) {
    console.log('error in db connection', err)
  }
  console.log('Connected successfully to server from database')

  const db = client.db(dbName)

  client.close()
})