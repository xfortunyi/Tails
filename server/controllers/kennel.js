const Kennel = require('./../models/kennel');
const Dog = require('./../models/dogs');
const { Sequelize, Op } = require('sequelize');

const createKennel = async function (req, res) {
	try {
		const kennel = await Kennel.create(req.body);
		res.status(201);
		res.send(JSON.stringify(kennel));
	} catch (error) {
		res.status(500);
		res.message = 'Not posted';
		res.send();
	}
};

const getKennels = async function (req, res) {
	try {
		const kennels = await Kennel.findAll({
			include: [{ model: Dog }],
		});
		res.status(200);
		res.message = 'Got them';
		res.send(kennels);
	} catch (error) {
		res.status(500);
		res.message = 'Error';
		res.send();
	}
};

const getKennelsAndDogs = async function (req, res) {
	try {
		const kennels = await Kennel.findAll({
			include: [{ model: Dog }],
		});
		res.status(200);
		res.message = 'Got them';
		res.send(kennels);
	} catch (error) {
		console.log(error);
		res.status(500);
		res.message = 'Error';
		res.send();
	}
};

// const findDogByBreed = async (req, res) => {
// 	try {
// 		let { breed } = req.body;
// 		const kennels = await Kennel.findAll({
// 			include: [
// 				{
// 					model: Dog,
// 				},
// 			],
// 			where: {
// 				breed: {
// 					[Op.contains]: [`${breed}`],
// 				},
// 			},
// 		});
// 		res.status(200).send(kennels);
// 	} catch (error) {
// 		console.log(error);
// 		res.sendStatus(500);
// 	}
// };

module.exports = {
	createKennel,
	getKennels,
	getKennelsAndDogs,
	// findDogByBreed,
};
