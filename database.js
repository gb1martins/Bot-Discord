const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	// SQLite only
	storage: 'database.sqlite',
});

console.log("Está funcionando essa parte");

sequelize.sync({
    force: true
});

module.export = sequelize;


const Guild = sequelize.define('guild', {
	DiscordID: {
		type: Sequelize.STRING,
		unique: true,
	},
	SteamID: Sequelize.STRING,
	Nome_Usuario_Palworld : Sequelize.STRING,
});

module.exports = Guild;




