module.exports = (mongoose) => {
	const userSchema = mongoose.Schema({
		id: {
			type: String,
		},

		usename: {
			type: String,
		},
		password: {
			type: String,
		},
	});

	return mongoose.model("users", userSchema);
};
