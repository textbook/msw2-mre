const { http, HttpResponse } = require("msw");
const { setupServer } = require("msw/node");

const server = setupServer();

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

it("works", async () => {
	const url = "https://example.com/welcome";
	const body = { message: "Hello, world!" };
	server.use(http.get("https://example.com/welcome", () => HttpResponse.json(body)));
	await expect((await fetch("https://example.com/welcome")).json()).resolves.toEqual(body);
});
