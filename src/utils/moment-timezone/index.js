const moment = require('moment-timezone');

const timezone = process.env.TZ;

const convertToLocalDatetime = (object) => {
	let currObject = object.dataValues;

	if (currObject.createdAt) {
		currObject.createdAt = moment
			.utc(currObject.createdAt)
			.tz(timezone)
			.format('YYYY-MM-DD HH:mm:ss');
	}

	if (currObject.updatedAt) {
		currObject.updatedAt = moment
			.utc(currObject.updatedAt)
			.tz(timezone)
			.format('YYYY-MM-DD HH:mm:ss');
	}

	return currObject;
};

module.exports = { convertToLocalDatetime };
