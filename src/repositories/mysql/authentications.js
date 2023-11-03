const Authentication = require('../../models').authentication;

const addToken = async (payload) => {
	return await Authentication.create(payload);
};

const destroyToken = async (userId) => {
	return await Authentication.destroy({
		where: {
			userId,
		},
	});
};

module.exports = { addToken, destroyToken };
