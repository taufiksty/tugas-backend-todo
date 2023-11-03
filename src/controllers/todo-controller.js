const asyncWrapper = require('../middlewares/async');
const {
	getTodos,
	createTodo,
	getTodo,
	deleteAllTodos,
	deleteTodo,
	updateTodo,
} = require('../services/todo-service');

const deleteAllTodosHandler = asyncWrapper(async (req, res) => {
	const userId = req.auth.id;

	await deleteAllTodos(userId);

	res.json({
		success: true,
		message: 'Success delete all of your todo.',
	});
});

const deleteTodoHandler = asyncWrapper(async (req, res) => {
	const userId = req.auth.id;
	const { id } = req.params;

	await deleteTodo(userId, id);

	res.json({
		success: true,
		message: `Success delete todo with id ${id}.`,
	});
});

const getAllTodosHandler = asyncWrapper(async (req, res) => {
	const userId = req.auth.id;

	const todos = await getTodos(userId);

	res.json({
		success: true,
		data: { todos },
	});
});

const getTodoHandler = asyncWrapper(async (req, res) => {
	const userId = req.auth.id;
	const { id } = req.params;

	const todo = await getTodo(userId, id);

	res.json({
		success: true,
		data: { todo },
	});
});

const postTodoHandler = asyncWrapper(async (req, res) => {
	const userId = req.auth.id;
	const payload = req.body;

	const newTodo = await createTodo({ ...payload, userId });

	res.status(201).json({
		success: true,
		data: { newTodo },
	});
});

const updateTodoHandler = asyncWrapper(async (req, res) => {
	const userId = req.auth.id;
	const { id } = req.params;
	const payload = req.body;

	const updatedTodo = await updateTodo(userId, id, payload);

	res.json({
		success: true,
		data: { updatedTodo },
	});
});

module.exports = {
	deleteAllTodosHandler,
	deleteTodoHandler,
	getAllTodosHandler,
	getTodoHandler,
	postTodoHandler,
	updateTodoHandler,
};
