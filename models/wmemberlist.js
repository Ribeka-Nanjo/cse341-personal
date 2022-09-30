module.exports = (mongoose) => {
	const memberSchema = mongoose.Schema({
		firstname: {
			type: String,
		},

		lastName: {
			type: String,
		},
		email: {
			type: String,
		},
		phoneNumber: {
			type: String,
		},
		baptismal_day: {
			type: String,
		},
		mission_year: {
			type: String,
		},
		calling: {
			type: String,
		},
	});

	return mongoose.model("wardmembers", memberSchema);
};
