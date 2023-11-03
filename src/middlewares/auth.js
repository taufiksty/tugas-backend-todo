const AuthenticationError = require('../errors/authentication-error');
const TokenManager = require('../utils/token');

const auth = (req, res, next) => {
	const token = req.header('Authorization').split(' ')[1];
	if (!token) {
		throw new AuthenticationError(
			"You didn't have token. Please set to your Authorization header.",
		);
	}

	try {
		const decodedToken = TokenManager.verifyAccessToken(token);
		req.auth = decodedToken;
		next();
	} catch (error) {
		throw new AuthenticationError('Token is not valid.');
	}
};

module.exports = auth;
