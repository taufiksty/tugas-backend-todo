const AuthenticationError = require('../errors/authentication-error');
const { TokenManager, TokenBlacklist } = require('../utils/token');

const auth = (req, res, next) => {
	const token = req.header('Authorization').split(' ')[1];

	if (!token) {
		throw new AuthenticationError(
			"You didn't have token. Please set to your Authorization header.",
		);
	}

	if (TokenBlacklist.has(token)) {
		throw new AuthenticationError(
			'Your token is unvalid. Please sign-in first.',
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
