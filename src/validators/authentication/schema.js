const Joi = require('joi');

const AuthenticationPayloadSchema = Joi.object({
	password: Joi.string().required(),
	username: Joi.string().required(),
});

module.exports = AuthenticationPayloadSchema;
