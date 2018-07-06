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
router.route('/users/:id')
.post(controller.userControllerPost.post)
router.route('/getPhoto/:id')
.get(controller.userController.get)
router.route('/getAnswers/:id')
.get(controller.individualQController.get)

module.exports.router = router;