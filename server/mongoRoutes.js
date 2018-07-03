const router = require('express').Router();
const controller = require('./mongoControllers.js');

router.route('/questions')
.post(controller.askQsController.post)
router.route('/questions/:id')
.get(controller.askQsController.get)
.delete(controller.askQsController.delete)
.put(controller.askQsController.put)
router.route('/id/:id')
.get(controller.individualQController.get)


// router.route('/users')
// .get(controller.todolist.fetch)
// .post(controller.todolist.post)
// router.route('/getPhotos')
// .get(controller.todolist.fetch)
// .post(controller.todolist.post)
// .put(controller.todolist.delete);
// .delete(controller.todolist.delete);

// router.route('/getAnswers')
// .get(controller.todolist.fetch)
// .post(controller.todolist.post)
// .put(controller.todolist.delete);
// .delete(controller.todolist.delete);



module.exports.router = router;