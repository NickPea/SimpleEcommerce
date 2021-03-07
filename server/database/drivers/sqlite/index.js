// sqlite driver

import knex from "knex";
import config from "../../../config/database.js";

const db = knex({
	client: config.sqlite.client,
	connection: {
		filename: config.sqlite.filename,
	},
	useNullAsDefault: true,
});

export default db;
