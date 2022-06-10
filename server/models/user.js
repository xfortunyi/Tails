const { Model, DataTypes } = require('sequelize');
const sequelize = require('./db');
class User extends Model {}

User.init(
	{
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER,
		},
		firstName: {
			type: DataTypes.STRING,
		},
		lastName: {
			type: DataTypes.STRING,
		},
		email: {
			type: DataTypes.STRING,
			unique: true,
		},
		password: DataTypes.STRING,
	},
	{ sequelize }
);

module.exports = User;
