const { Model, DataTypes } = require('sequelize');
const sequelize = require('./db');
const Kennel = require('./kennel');
class Dog extends Model {}

Dog.init(
	{
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER,
		},
		name: {
			type: DataTypes.STRING,
		},
		breed: {
			type: DataTypes.STRING,
		},
		size: {
			type: DataTypes.STRING,
		},
		age: {
			type: DataTypes.FLOAT,
		},
		description: {
			type: DataTypes.STRING,
		},
	},
	{ sequelize }
);

Kennel.hasMany(Dog);
Dog.belongsTo(Kennel);

module.exports = Dog;
