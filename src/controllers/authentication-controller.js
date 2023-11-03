const asyncWrapper = require('../middlewares/async');
const {
	signUp,
	signIn,
	signOut,
} = require('../services/authentication-service');
const AuthenticationValidator = require('../validators/authentication');
const UserValidator = require('../validators/user');

const deleteSignOutAuthenticationHandler = asyncWrapper(async (req, res) => {
	const userId = req.auth.id;

	await signOut(userId);

	res.json({
		success: true,
		message: "You're sign-out successfully.",
	});
});

const postSignInAuthenticationHandler = asyncWrapper(async (req, res) => {
	const payload = req.body;

	AuthenticationValidator.validateAuthenticationPayload(payload);
	const { accessToken, refreshToken } = await signIn(payload);

	res.status(201).json({
		success: true,
		message: 'Sign-in success',
		data: { accessToken, refreshToken, expiresIn: '3h' },
	});
});

const postSignUpAuthenticationHandler = asyncWrapper(async (req, res) => {
	const payload = req.body;

	UserValidator.validateUserPayload(payload);
	const newUser = await signUp(payload);

	res.status(201).json({
		success: true,
		data: { newUser },
	});
});

module.exports = {
	deleteSignOutAuthenticationHandler,
	postSignInAuthenticationHandler,
	postSignUpAuthenticationHandler,
};
