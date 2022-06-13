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

const deleteDog = async (req, res) => {
	try {
		const deldog = await Dog.destroy(req.body) {
			where: {
				id : id
			}
		}
	} catch (error) {

	}
}

try {
	const productToDelete = req.body.product;
	const shopId = req.body.shopId;
	const shop = Shop.findOne({
		where: { id: shopId }
	}).then(shop => {
		shop.sequelize.query(
			`UPDATE "Shops" SET products='{${[
				shop.products.filter(product => product !== productToDelete)
			]}}'WHERE id=${shopId}`
		);
	});

	res.status(200).send(shop);
} catch (error) {
	console.log(error);
	res.status(400).send({ error: "400", message: "Could not create shop" });
}

module.exports = { createDog };
