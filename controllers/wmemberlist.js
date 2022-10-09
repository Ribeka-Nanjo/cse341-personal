const db = require("../models");
const wMember = db.wardmemberList;

const getAll = async (req, res, next) => {
	await wMember
		.find()
		.then((data) => res.status(200).json(data))
		.catch((err) => next(createError(500, err)));
};

const getById = async (req, res, next) => {
	const { id } = req.params;

	await wMember
		.findById(id)
		.then((data) => {
			if (!data)
				return next(
					createError(
						404,
						`The member list with ID: ${id} was not found`
					)
				);
			return res.status(200).json(data);
		})
		.catch((err) => next(createError(500, err)));
};

const create = async (req, res, next) => {
	const wmemberlist = req.body;
	res.setHeader("content-type", "application/json");

	await memberSchema
		.validateAsync(wmemberlist)
		.then(async (valid) => {
			console.log(valid);
			// Data to database
			await wMember
				.create(valid)
				.then((r) =>
					res.status(201).json({
						message: "The memberlist was created successfully",
						memberlistId: r.id,
					})
				)
				.catch((err) =>
					next(
						createError(
							500,
							err ||
								"Some error occurred while creating the memberlist"
						)
					)
				);
		})
		.catch((err) => next(createError(422, err)));
};

const update = async (req, res, next) => {
	const { id } = req.params;
	const wmemberlist = req.body;

	await memberSchema
		.validateAsync(wmemberlist)
		.then(async (valid) => {
			console.log(valid);
			await wMember
				.findByIdAndUpdate(id, valid)
				.then((r) => {
					if (!r)
						return next(
							createError(
								404,
								`Couldn't update the memberlist with ID: ${id}, maybe it was not found`
							)
						);
					return res.status(204).send({
						message: "The memberlist was updated successfully",
					});
				})
				.catch((err) => next(createError(500, err)));
		})
		.catch((err) => next(createError(422, err)));
};

const remove = async (req, res, next) => {
	const { id } = req.params;

	// Process data to database
	res.setHeader("content-type", "application/json");
	await wMember
		.findByIdAndDelete(id)
		.then((r) => {
			if (!r)
				return next(
					createError(
						404,
						`Couldn't delete the memberlist with ID: ${id}, maybe it was not found`
					)
				);
			return res
				.status(200)
				.json({ message: "The memberlist was deleted successfully" });
		})
		.catch((err) => next(createError(500, err)));
};

module.exports = {
	getAll,
	getById,
	create,
	update,
	remove,
};
