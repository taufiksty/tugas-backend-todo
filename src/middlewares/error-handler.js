const config = require('../config');
const ClientError = require('../errors/client-error');

const errorHandler = (error, req, res, next) => {
	if (error instanceof ClientError) {
		res.status(error.statusCode).json({
			success: false,
			errorName: error.name,
			errorMessage: error.message,
			stack: config.app.env === 'production' ? undefined : error.stack,
		});
	} else {
		res.status(500).json({
			success: false,
			errorName: 'ServerError',
			errorMessage: error.message,
			stack: config.app.env === 'production' ? undefined : error.stack,
		});
	}
};

module.exports = errorHandler;
