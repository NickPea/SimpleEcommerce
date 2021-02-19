// Test Respository

import db from "../../database/drivers/postgres/index.js";

class TestRepository {
	async getTestMessage() {
		const data = await db.select("*").from("test").first();
		return data.message;
	}
}

export default new TestRepository();
