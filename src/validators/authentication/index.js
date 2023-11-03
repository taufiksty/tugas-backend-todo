const InvariantError = require('../../errors/invariant-error');
const AuthenticationPayloadSchema = require('./schema');

const AuthenticationValidator = {
	validateAuthenticationPayload: (payload) => {
		const validationResult = AuthenticationPayloadSchema.validate(payload);

		if (validationResult.error) {
			throw new InvariantError(validationResult.error.message);
		}
	},
};

module.exports = AuthenticationValidator;
