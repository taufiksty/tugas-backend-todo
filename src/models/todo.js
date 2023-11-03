'use strict';

module.exports = (sequelize, DataTypes) => {
	const todo = sequelize.define(
		'todo',
		{
			id: {
				type: DataTypes.STRING,
				allowNull: false,
				primaryKey: true,
			},
			title: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			description: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			completed: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			userId: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'user_id',
			},
			createdAt: {
				type: DataTypes.DATE,
				field: 'created_at',
			},
			updatedAt: {
				type: DataTypes.DATE,
				defaultValue: DataTypes.NOW,
				field: 'updated_at',
			},
		},
		{},
	);

	todo.association = (models) => {
		todo.belongsTo(models.user, {
			foreignKey: 'userId',
			as: 'owner',
		});
	};

	return todo;
};
