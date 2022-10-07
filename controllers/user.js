const db = require("../models");
const User = db.user;

const getAll = async (req, res, next) => {
	await User.find()
		.then((data) => res.status(200).json(data))
		.catch((err) => next(createError(500, err)));
};

const getById = async (req, res, next) => {
	const { id } = req.params;

	await User.findById(id)
		.then((data) => {
			if (!data)
				return next(
					createError(
						404,
						`The user info with ID: ${id} was not found`
					)
				);
			return res.status(200).json(data);
		})
		.catch((err) => next(createError(500, err)));
};

const create = async (req, res, next) => {
	const user = req.body;
	res.setHeader("content-type", "application/json");

	await userSchema
		.validateAsync(user)
		.then(async (valid) => {
			console.log(valid);
			// Data to database
			await User.create(valid)
				.then((r) =>
					res.status(201).json({
						message: "The user info was created successfully",
						userId: r.id,
					})
				)
				.catch((err) =>
					next(
						createError(
							500,
							err ||
								"Some error occurred while creating user info"
						)
					)
				);
		})
		.catch((err) => next(createError(422, err)));
};

module.exports = {
	getAll,
	getById,
	create,
};
