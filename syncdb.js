const jose = require('./database');


sequelize.sync({
    force: true
});