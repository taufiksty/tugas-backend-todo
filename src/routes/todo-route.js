const express = require('express');
const auth = require('../middlewares/auth');
const {
	getAllTodosHandler,
	postTodoHandler,
	getTodoHandler,
	updateTodoHandler,
	deleteTodoHandler,
	deleteAllTodosHandler,
} = require('../controllers/todo-controller');

const router = express.Router();

router.use(auth);

router
	.route('/')
	.get(getAllTodosHandler)
	.post(postTodoHandler)
	.delete(deleteAllTodosHandler);
router
	.route('/:id')
	.get(getTodoHandler)
	.put(updateTodoHandler)
	.delete(deleteTodoHandler);

module.exports = router;
