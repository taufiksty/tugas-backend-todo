const User = require('../../models').user;

const addUser = async (payload) => {
	return await User.create(payload);
};

const findByUsername = async (username) => {
	return await User.findOne({
		where: {
			username,
		},
	});
};

module.exports = { addUser, findByUsername };
