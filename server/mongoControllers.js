const dbExport = require('../database/db_mongo/index')

  //invoked the imported db function
  //query on that
  //same as shell queries
  //+ error handling
  //query, and then err and results (callback)
  //res.send(results)
  //have to turn find responses into an array
    //callback goes in the query itself for find

  //db.collection(query, callback function(err, result))
  //turn id into number within request

  //req.restaurantId

const individualQController = {
  get: (req, res) => {
    const questionsDB = dbExport()
    const query = Number(req.params.id)
    questionsDB.collection('question').find({id: query }).toArray(function(err, question) {
      if (err) {
        console.log('error in question get', err)
      }
      res.send(question)
    })
  }
}


const askQsController = {
  get: (req, res) => {
    const questionsDB = dbExport()
    const query = Number(req.params.id)
    questionsDB.collection('question').find({restaurant_id: query }).limit(10).toArray(function(err, questions) {
      if (err) {
        console.log('error in question get', err)
      }
      res.send(questions)
    })
  },
  put: (req, res) => {
    const questionsDB = dbExport()
    const query = Number(req.params.id)
    questionsDB.collection('question').update({ id: query }, { $set : {question: req.body.question }}, function(err, something) {
      if (err) {
        console.log('error in put', err)
        res.sendStatus(404)
      }
      res.sendStatus(200)
    }) 
  },
  delete: (req, res) => {
    const questionsDB = dbExport()
    const query = Number(req.params.id)
    questionsDB.collection('question').deleteOne( { id: query }, function(err, something) {
      if (err) {
        console.log('error in put', err)
        res.sendStatus(404)
      }
      res.sendStatus(200)
    })
  },
  post: (req, res) => {
    const questionsDB = dbExport()
    questionsDB.collection('question').insertOne({id: Number(req.body.id), user_id: req.body.user_id, restaurant_id: req.body.restaurant_id, question: req.body.question, parent_id: req.body.parent_id, helpful: req.body.helpful, createdat: req.body.createdat, updatedat: req.body.updatedat}, function(err){
      if (err) {
        console.log('error in post request', err)
        res.sendStatus(404)
      }
      res.sendStatus(200)
    })
  }
}

module.exports = { askQsController,  individualQController }

// { "_id" : ObjectId("5b36c855834415ecc87337c7"), "id" : 3617, "user_id" : 22842, "restaurant_id" : 7816, 
// "question" : "Why pairs the chicken stir?", "parent_id" : 0, "helpful" : 59, 
// "createdat" : "Tue Sep 25 2018 00:01:29 GMT-0700 (PDT)", 
// "updatedat" : "Tue Sep 25 2018 00:01:29 GMT-0700 (PDT)" }