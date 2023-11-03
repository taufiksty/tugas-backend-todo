const app = require('./app');
const config = require('./config');
const db = require('./models');

const PORT = config.app.port;

db.sequelize.sync().then((res) => {
	app.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`);
	});
});
