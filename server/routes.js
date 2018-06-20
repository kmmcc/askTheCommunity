
const router = require('express').Router();
const controller = require('./controllers.js');

router.route('questions')
//.get(controller.app.get)
.post(controller.post);
// .put(controller.todolist.delete);
// .delete(controller.todolist.delete);
router.route('/api/questions/:id')
// .get(controller.lists.fetch)
// .post(controller.lists.post);
// .put(controller.todolist.delete);
// .delete(controller.todolist.delete);
router.route('users')
// .get(controller.todolist.fetch)
// .post(controller.todolist.post)
// .put(controller.todolist.delete);
// .delete(controller.todolist.delete);
router.route('getPhotos')
// .get(controller.todolist.fetch)
// .post(controller.todolist.post)
// .put(controller.todolist.delete);
// .delete(controller.todolist.delete);

router.route('getAnswers')
// .get(controller.todolist.fetch)
// .post(controller.todolist.post)
// .put(controller.todolist.delete);
// .delete(controller.todolist.delete);

module.exports = router;

//questions
//users
//getPhotos
//getAnswers