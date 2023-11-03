const config = require('../config');

const notFound = (req, res, next) => {
	const error = new Error(`Route ${config.app.baseUrl + req.url} not found`);

	res.status(404).json({
		status: 'fail',
		errorName: 'NotFoundError',
		errorMessage: error.message,
		stack: config.app.env === 'production' ? undefined : error.stack,
	});
};

module.exports = notFound;
