app.post('/questions', (req, res) => {
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
})

app.post('/users', (req, res) => {
  User.create({
      username: req.body.username,
      imageUrl: req.body.imageUrl
  })
  .then(data => {
      res.status(201).send(data);
  })
  .catch(err => {
      res.status(400).send(err);
  })
})

app.get('/questions/:id', (req, res) => {
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
})

app.get('/getPhoto/:id', (req, res) => {
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
})

app.get('/getAnswers/:id', (req, res) => {
  Question.find({
      where: {
          parent_id: req.params.id
      }
  })
  .then(data => {
      res.status(200).json(data);
  })
  .catch(err => {
      res.status(400).json(err);
  })
})