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

const askQsController = {
  get: (req, res) => {
    const questionsDB = dbExport()
    const query = Number(req.params.id)
    questionsDB.collection('question').find({restaurant_id: query }).limit(10).toArray(function(err, questions) {
      if (err) {
        console.log('error in question get', err)
      }
      res.sendStatus(questions)
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
  }
}

module.exports = { askQsController }