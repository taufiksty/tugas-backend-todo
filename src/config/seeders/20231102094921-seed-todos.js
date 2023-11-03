'use strict';

const { nanoid } = require('nanoid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		await queryInterface.bulkInsert('todos', [
			{
				id: `todo-${nanoid(8)}`,
				title: "Taufik 's First Todo",
				description: 'My first todo',
				user_id: 'user-ajljd48t',
			},
			{
				id: `todo-${nanoid(8)}`,
				title: "Taufik 's Second Todo",
				description: 'My second todo',
				user_id: 'user-ajljd48t',
			},
			{
				id: `todo-${nanoid(8)}`,
				title: "Hana's First Todo",
				description: 'Her first todo',
				user_id: 'user-aqllOol1',
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete('todos', null);
	},
};
