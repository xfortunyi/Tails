const { Sequelize } = require('sequelize');
require('dotenv').config();

const USER = 'root';
const NAME = 'tails';
const PASSWORD = 'password';

const config = {
	host: 'localhost',
	dialect: 'mysql',
	port: 3306,
};

const sequelize = new Sequelize(NAME, USER, PASSWORD, config);

module.exports = sequelize;
