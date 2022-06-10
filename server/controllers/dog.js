const Dog = require('./../models/dogs');

const createDog = async (req, res) => {
	try {
		const dog = await Dog.create(req.body);
		res.status(201);
		res.send(JSON.stringify(dog));
	} catch (error) {
		res.status(500);
		res.message = 'Not posted';
		res.send();
	}
};

module.exports = { createDog };
