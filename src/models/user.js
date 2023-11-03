'use strict';

module.exports = (sequelize, DataTypes) => {
	const user = sequelize.define(
		'user',
		{
			id: {
				type: DataTypes.STRING,
				allowNull: false,
				primaryKey: true,
			},
			fullname: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			username: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			createdAt: {
				type: DataTypes.DATE,
				defaultValue: DataTypes.NOW,
				field: 'created_at',
			},
		},
		{ timestamps: false },
	);

	user.association = (models) => {
		user.hasOne(models.authentication, {
			foreignKey: 'authenticationId',
			as: 'auth_token',
			onDelete: 'CASCADE',
		});
		user.hasMany(models.todo, {
			foreignKey: 'userId',
			as: 'todos',
			onDelete: 'CASCADE',
		});
	};

	return user;
};
