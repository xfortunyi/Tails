const { Model, DataTypes } = require('sequelize');
const sequelize = require('./db');

class Kennel extends Model {}

Kennel.init(
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
		password: {
			type: DataTypes.STRING,
		},
		adress: {
			type: DataTypes.STRING,
		},
		city: {
			type: DataTypes.STRING,
		},
		email: {
			type: DataTypes.STRING,
			unique: true,
		},
		telephone: {
			type: DataTypes.FLOAT,
		},
		website: {
			type: DataTypes.STRING,
		},
		description: {
			type: DataTypes.STRING,
		},
		latitude: {
			type: DataTypes.FLOAT,
		},
		longitude: {
			type: DataTypes.FLOAT,
		},
		// dog: {
		// 	type: DataTypes.ARRAY(Dog),
		// },
	},
	{ sequelize }
);

// Dog.Kennel = Dog.belongsTo(Kennel);
// Kennel.hasMany(Dog, {
// 	foreignKey: 'kennelId',
// });

module.exports = Kennel;
