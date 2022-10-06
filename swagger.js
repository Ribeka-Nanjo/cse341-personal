const swaggerAutogen = require("swagger-autogen")();

const doc = {
	info: {
		title: "My API",
		description: "This is my API",
	},
	host: "cse341-personal.onrender.com",
	schemes: ["https", "http"],
};

const outputFile = "./routes/swagger.js";
const endpointsFiles = ["./routes/index.js"];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
