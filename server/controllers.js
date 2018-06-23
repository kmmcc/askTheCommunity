//questions
//questions by id
//users
//getPhotos
//getAnswers

const { User } = require('../database/schemas.js');
const { Question } = require('../database/schemas.js');

module.exports = {
  questions: {
    post: (req, res) => {
      Question.create({
          user_id: req.body.user_id,
          restaurant_id: req.body.restaurant_id,
          text: req.body.text,
          parent_id: req.body.parent_id || null,
          helpful: req.body.helpful || null
      })
      .then(data => {
          console.log('Succesfully inserted data into the database...', data);
          res.status(201).send(data);
      })
      .catch(err => {
          console.log('Error inserting data into the database', err);
          res.status(400).send(err);
      })
    },
    put: (req, res) => {
      Question.update({
        text: req.body.text,
        helpful: req.body.helpful
      }, {
        where: { id: req.body.id}
      })
    },
    delete: (req, res) => {
      Question.destroy({
        where: {
          id: req.body.id
        }
      })
    }
  },
  questionsByID: {
    get: (req, res) => {
      console.log('in questions by id get')
      Question.findAll({
        where: {
            restaurant_id: req.params.id
        }
      })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.send(err);
      })
    }
  },
  getUser: {
    getPhoto: (req, res) => {
      User.find({
          where: {
              id: req.params.id
          }
      })
      .then(data => {
          res.status(200).json(data);
      })
      .catch(err => {
          res.status(400).send(err);
      })
    }
  },

}

  // app.post('/questions', (req, res) => {
  //   Question.create({
  //       user_id: req.body.user_id,
  //       restaurant_id: req.body.restaurant_id,
  //       text: req.body.text,
  //       parent_id: req.body.parent_id || null,
  //       helpful: req.body.helpful || null
  //   })
  //   .then(data => {
  //       console.log('Succesfully inserted data into the database...', data);
  //       res.status(201).send(data);
  //   })
  //   .catch(err => {
  //       console.log('Error inserting data into the database', err);
  //       res.status(400).send(err);
  //   })
  // })

  // app.get('/questions/:id', (req, res) => {
  //   Question.findAll({
  //     where: {
  //         restaurant_id: req.params.id
  //     }
  //   })
  //   .then(data => {
  //     res.status(200).json(data);
  //   })
  //   .catch(err => {
  //     res.send(err);
  //   })
  // })

  // app.post('/users', (req, res) => {
  //   User.create({
  //       username: req.body.username,
  //       imageUrl: req.body.imageUrl
  //   })
  //   .then(data => {
  //       res.status(201).send(data);
  //   })
  //   .catch(err => {
  //       res.status(400).send(err);
  //   })
  // })

  // app.get('/getAnswers/:id', (req, res) => {
  //   Question.find({
  //       where: {
  //           parent_id: req.params.id
  //       }
  //   })
  //   .then(data => {
  //       res.status(200).json(data);
  //   })
  //   .catch(err => {
  //       res.status(400).json(err);
  //   })
  // })

  // app.get('/getPhoto/:id', (req, res) => {
  //   User.find({
  //       where: {
  //           id: req.params.id
  //       }
  //   })
  //   .then(data => {
  //       res.status(200).json(data);
  //   })
  //   .catch(err => {
  //       res.status(400).send(err);
  //   })
  // })
