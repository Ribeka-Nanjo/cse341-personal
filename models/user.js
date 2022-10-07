module.exports = (mongoose) => {
	const userSchema = mongoose.Schema({
		recordNumber: {
			type: String,
		},

		baptismalDay: {
			type: Date,
		},
		Calling: {
			type: String,
		},
	});

	return mongoose.model("User", userSchema);
};
