'use strict';

module.exports = (sequelize, DataTypes) => {
	const authentication = sequelize.define(
		'authentication',
		{
			id: {
				type: DataTypes.STRING,
				allowNull: false,
				primaryKey: true,
			},
			token: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			createdAt: {
				type: DataTypes.DATE,
				field: 'created_at',
			},
			userId: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'user_id',
			},
			updatedAt: {
				type: DataTypes.DATE,
				defaultValue: DataTypes.NOW,
				field: 'updated_at',
			},
		},
		{},
	);

	authentication.association = (models) => {
		authentication.belongsTo(models.user, {
			foreignKey: 'userId',
			as: 'user',
		});
	};

	return authentication;
};
