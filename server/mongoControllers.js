const dbExport = require('../database/db_mongo/index')

const individualQController = {
  get: (req, res) => {
    const questionsDB = dbExport()
    const query = Number(req.params.id)
    questionsDB.collection('question').find({id: query }).toArray(function(err, question) {
      if (err) {
        console.log('error in question get', err)
        res.sendStatus(404)
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
        res.sendStatus(404)
      }
      res.send(questions)
    })
  },
  put: (req, res) => {
    const questionsDB = dbExport()
    const query = Number(req.params.id)
    questionsDB.collection('question').update({ id: query }, { $set : {question: req.body.question }}, function(err, result) {
      if (err) {
        console.log('error in question put', err)
        res.sendStatus(404)
      }
      res.sendStatus(200)
    }) 
  },
  delete: (req, res) => {
    const questionsDB = dbExport()
    const query = Number(req.params.id)
    questionsDB.collection('question').deleteOne( { id: query }, function(err, result) {
      if (err) {
        console.log('error in question delete', err)
        res.sendStatus(404)
      }
      res.sendStatus(200)
    })
  },
  post: (req, res) => {
    const questionsDB = dbExport()
    questionsDB.collection('question').insertOne({id: Number(req.body.id), user_id: req.body.user_id, restaurant_id: req.body.restaurant_id, question: req.body.question, parent_id: req.body.parent_id, helpful: req.body.helpful, createdat: req.body.createdat, updatedat: req.body.updatedat}, function(err){
      if (err) {
        console.log('error in question post request', err)
        res.sendStatus(404)
      }
      res.sendStatus(200)
    })
  }
}

const userController = {
  get: (req, res) => {
    const questionsDB = dbExport()
    const query = Number(req.params.id)
    questionsDB.collection('user').find({id: query}).toArray(function(err, user) {
      if (err) {
        console.log('error in user get', err)
        res.sendStatus(404)
      }
      res.send(user)
    })
  }
}

const userControllerPost = {
  post: (req, res) => {
    const questionsDB = dbExport()
    const query = Number(req.params.id)
    questionsDB.collection('user').insertOne({id: query}, function(err, something) {
      if (err) {
        console.log('error in user delete', err)
        res.sendStatus(404)
      }
      res.sendStatus(200)
    })
  }
}

module.exports = { askQsController,  individualQController, userControllerPost, userController }