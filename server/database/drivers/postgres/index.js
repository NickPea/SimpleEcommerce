// database driver init

import knex from "knex";
import config from "../../../config/database.js";

export default knex({
	client: config.postgres.client,
	connection: {
		host: config.postgres.host,
		username: config.postgres.username,
		password: config.postgres.password,
		database: config.postgres.database,
	},
});
