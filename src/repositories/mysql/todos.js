const { Op } = require('sequelize');

const Todo = require('../../models').todo;

const addTodo = async (payload) => {
	return await Todo.create(payload);
};

const destroyAllTodos = async (userId) => {
	return await Todo.destroy({
		where: { userId },
	});
};

const destroyTodo = async (userId, id) => {
	return await Todo.destroy({
		where: {
			[Op.and]: [{ id }, { userId }],
		},
	});
};

const editTodo = async (id, payload) => {
	return await Todo.update(
		{ ...payload },
		{
			where: { id },
		},
	);
};

const getTodoById = async (todoId) => {
	return await Todo.findOne({
		where: {
			id: todoId,
		},
	});
};

const getTodosByUserId = async (userId) => {
	return await Todo.findAll({
		where: {
			userId,
		},
	});
};

module.exports = {
	addTodo,
	destroyAllTodos,
	destroyTodo,
	editTodo,
	getTodoById,
	getTodosByUserId,
};
