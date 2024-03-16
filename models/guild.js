const Sequelize = require('sequelize');
const sequelize = require('../database');

const Guild = sequelize.define('guild', {
	DiscordID: {
		type: Sequelize.NUMBER,
		unique: true,
	},
	SteamID: Sequelize.NUMBER,
	Nome_Usuario_Palworld : Sequelize.STRING,
});

module.exports = Guild;
