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
		streetAddress: {
			type: String,
		},
		birthday: {
			type: Date,
		},
		placeOfbirth: {
			type: String,
		},
	});

	return mongoose.model("wardmember", memberSchema);
};
