const Sequelize = require("sequelize");

const sequelize = new Sequelize("nodejs-complete", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
