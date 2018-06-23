
const router = require('express').Router();
const controller = require('./controllers.js');

router.route('/questions')
//.get(controller.app.get)
.post(controller.questions.post)
.put(controller.questions.put);
// .put(controller.todolist.delete);
// .delete(controller.todolist.delete);
router.route('/questions/:id')
.get(controller.questionsByID.get)
// .post(controller.questionsByID.get);
// .delete(controller.todolist.delete);
router.route('/users')
// .get(controller.todolist.fetch)
// .post(controller.todolist.post)
// .put(controller.todolist.delete);
// .delete(controller.todolist.delete);
router.route('/getPhotos')
// .get(controller.todolist.fetch)
// .post(controller.todolist.post)
// .put(controller.todolist.delete);
// .delete(controller.todolist.delete);

router.route('/getAnswers')
// .get(controller.todolist.fetch)
// .post(controller.todolist.post)
// .put(controller.todolist.delete);
// .delete(controller.todolist.delete);

module.exports = router;

//questions
//users
//getPhotos
//getAnswers