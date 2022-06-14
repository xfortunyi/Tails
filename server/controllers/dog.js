const res = require('express/lib/response');
const Dog = require('./../models/dogs');

const createDog = async (req, res) => {
	console.log(req.body);
	try {
		const dog = await Dog.create(req.body);
		res.status(201);
		res.send(dog);
	} catch (error) {
		res.status(500);
		console.log(error);
		res.message = 'Not posted';
		res.send();
	}
};

const deleteDog = async (req, res) => {
	const deldog = await Dog.destroy({
		where: {
			id: req.params.id,
		},
	});
	res.send(true);
};

module.exports = { createDog, deleteDog };
