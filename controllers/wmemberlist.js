const db = require("../models");
const wMember = db.user;

exports.createMember = (req, res) => {
	// Validate request
	if (!req.body.username || !req.body.password) {
		res.status(400).send({ message: "Content can not be empty!" });
		return;
	}

	const member = new wMember(req.body);
	member
		.save()
		.then((data) => {
			console.log(data);
			res.status(201).send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the user.",
			});
		});
};

exports.getMember = (req, res) => {
	User.find({})
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving users.",
			});
		});
};

exports.getAll = (req, res) => {
	const username = req.params.username;
	User.find({ username: username })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving users.",
			});
		});
};
