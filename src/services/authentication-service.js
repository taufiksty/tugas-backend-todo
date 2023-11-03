const { nanoid } = require('nanoid');
const bcrypt = require('bcrypt');

const { findByUsername, addUser } = require('../repositories/mysql/users');
const {
	addToken,
	destroyToken,
} = require('../repositories/mysql/authentications');

const InvariantError = require('../errors/invariant-error');
const AuthenticationError = require('../errors/authentication-error');

const { TokenManager, TokenBlacklist } = require('../utils/token');

const signIn = async ({ username, password }) => {
	const checkUsernameIsExist = await findByUsername(username);
	if (!checkUsernameIsExist) {
		throw new AuthenticationError(
			"Username doesn't exist. Please remember your username or sign-up.",
		);
	}

	const { id, password: hashedPassword } = checkUsernameIsExist;

	const matchPassword = await bcrypt.compare(password, hashedPassword);
	if (!matchPassword) {
		throw new AuthenticationError('Sign-in failed. Your password is wrong.');
	}

	const accessToken = TokenManager.generateAccessToken({ id });
	const refreshToken = TokenManager.generateRefreshToken({ id });

	const authenticationId = `auth-${nanoid(16)}`;
	await addToken({ id: authenticationId, token: refreshToken, userId: id });

	return { accessToken, refreshToken };
};

const signOut = async (userId, token) => {
	TokenBlacklist.add(token);

	return await destroyToken(userId);
};

const signUp = async ({ fullname, username, password }) => {
	const checkUsernameIsExist = await findByUsername(username);
	if (checkUsernameIsExist) {
		throw new InvariantError(
			'Sign-up failed, username was exist. Please try another username.',
		);
	}

	const id = `user-${nanoid(16)}`;
	const hashedPassword = await bcrypt.hash(password, 10);

	const addedUser = await addUser({
		id,
		fullname,
		username,
		password: hashedPassword,
	});

	return addedUser;
};

module.exports = { signIn, signOut, signUp };
