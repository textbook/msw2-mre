const { TextEncoder} = require("node:util");

/**
 * @type {import("jest").Config}
 */
module.exports = {
	globals: {
		fetch,
		Request,
		Response,
		Headers,
		FormData,
		ReadableStream,
		TextEncoder,
	},
	testEnvironment: "jsdom",
	testEnvironmentOptions: {
		customExportConditions: [""],
	},
};
