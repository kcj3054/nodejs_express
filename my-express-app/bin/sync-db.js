const model = require('../models');

model.sequelize.sync({ force: false })

module.exports = model;