const Joi = require('joi');

const UserPayloadSchema = Joi.object({
	fullname: Joi.string().max(30).required(),
	password: Joi.string().min(8).max(16).required(),
	username: Joi.string().min(6).max(16).required(),
});

module.exports = UserPayloadSchema;
