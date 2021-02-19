//
import TestService from "../../services/TestService.js";
import db from "../../database/drivers/postgres/index.js";

describe("services/TestService", () => {
	it("returns database message", async () => {
		const asyncData = await TestService.index()
		expect(asyncData).toMatch(/Test: OK/);
	});
});

afterAll(() => db.destroy());