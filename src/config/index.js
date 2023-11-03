const dotenv = require('dotenv');

dotenv.config();

module.exports = {
	app: {
		env: process.env.NODE_ENV,
		port: process.env.PORT,
		baseUrl: process.env.BASE_URL,
	},
	jwt: {
		accessToken: process.env.ACCESS_TOKEN,
		refreshToken: process.env.REFRESH_TOKEN,
	},
	tz: process.env.TZ,
};
