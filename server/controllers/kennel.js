const Kennel = require('./../models/kennel');
const Dog = require('./../models/dogs');
const bcrypt = require('bcrypt');
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

const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const kennelLog = await Kennel.findOne({
			include: [{ model: Dog }],
			where: {
				email: email,
				password: password,
			},
		});
		if (!kennelLog) {
			throw new Error();
		}

		res.status(200).send(kennelLog);
	} catch (error) {
		res
			.status(401)
			.send({ error: '401', message: 'Username or password is incorrect' });
	}
};

const logout = (req, res) => {
	req.session.destroy((error) => {
		if (error) {
			res
				.status(500)
				.send({ error, message: 'Could not log out, please try again' });
		} else {
			res.clearCookie('sid');
			res.status(200).send({ message: 'Logout successful' });
		}
	});
};

module.exports = {
	createKennel,
	getKennels,
	getKennelsAndDogs,
	login,
	logout,
};
