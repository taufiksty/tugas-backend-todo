const app = require('./app');
const config = require('./config');
const db = require('./models');

const PORT = config.app.port;
const HOST =
	config.app.env === 'production' ? config.app.hostProd : config.app.hostDev;

db.sequelize.sync().then((res) => {
	app.listen(PORT, HOST, () => {
		console.log(`Server running on port http://${HOST}:${PORT}`);
	});
});
