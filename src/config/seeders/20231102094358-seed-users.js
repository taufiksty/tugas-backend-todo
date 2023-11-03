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
		await queryInterface.bulkInsert('users', [
			{
				id: `user-${nanoid(8)}`,
				fullname: 'Muhamad Taufik Satya',
				username: 'taufiksty',
				password: 'password',
			},
			{
				id: `user-${nanoid(8)}`,
				fullname: 'Hana Athifah',
				username: 'hanathfh',
				password: 'password',
			},
			{
				id: `user-${nanoid(8)}`,
				fullname: 'Fani Rachmah Nur Aini',
				username: 'fanirchmh',
				password: 'password',
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
		await queryInterface.bulkDelete('users', null);
	},
};
