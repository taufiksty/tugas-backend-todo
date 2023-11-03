const { nanoid } = require('nanoid');
const {
	getTodosByUserId,
	addTodo,
	getTodoById,
	editTodo,
	destroyTodo,
	destroyAllTodos,
} = require('../repositories/mysql/todos');
const { convertToLocalDatetime } = require('../utils/moment-timezone');

const AuthorizationError = require('../errors/authorization-error');
const NotFoundError = require('../errors/notfound-error');

const createTodo = async (payload) => {
	const id = `todo-${nanoid(16)}`;
	const addedTodo = await addTodo({ id, ...payload });

	return convertToLocalDatetime(addedTodo);
};

const deleteAllTodos = async (userId) => {
	await destroyAllTodos(userId);
};

const deleteTodo = async (userId, id) => {
	await verifyTodoAccess(userId, id);

	await destroyTodo(userId, id);
};

const getTodo = async (userId, todoId) => {
	const todo = await verifyTodoAccess(userId, todoId);

	return convertToLocalDatetime(todo);
};

const getTodos = async (userId) => {
	const todos = await getTodosByUserId(userId);

	return todos.map(convertToLocalDatetime);
};

const updateTodo = async (userId, id, payload) => {
	await verifyTodoAccess(userId, id);

	await editTodo(id, payload);
	const updatedTodo = await getTodoById(id);

	return convertToLocalDatetime(updatedTodo);
};

const verifyTodoAccess = async (userId, id) => {
	const todo = await getTodoById(id);

	if (!todo) {
		throw new NotFoundError('Todo is not found.');
	}

	if (todo.dataValues.userId !== userId) {
		throw new AuthorizationError(
			"Forbidden. You're not the owner of this todo",
		);
	}

	return todo;
};

module.exports = {
	createTodo,
	deleteAllTodos,
	deleteTodo,
	getTodo,
	getTodos,
	updateTodo,
};
