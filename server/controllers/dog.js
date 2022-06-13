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

// const deleteDog = async (req, res) => {
// 	try {
// 		const id = req.body.id;
// 		console.log(req.body.id);
// 		await Dog.destroy({
// 			where: {
// 				id: id,
// 			},
// 		});
// 	} catch (error) {
// 		console.log(error);
// 		res.status(500).send({ error: '500', message: 'Could not delete dog' });
// 	}
// };

module.exports = { createDog };
