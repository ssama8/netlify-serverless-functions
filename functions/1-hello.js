//domain/.netlify/1-hello

//need to return a status code and a body, always need to send a string.
exports.handler = async (event, context, cb) => {
	console.log(context);
	return {
		statusCode: 200,
		body: "Hello World",
	};
};
