// database config

import dotenv from "dotenv";
import path from "path";

dotenv.config();

export default {
	postgres: {
		client: process.env.PG_CLIENT || "pg",
		host: process.env.PG_HOST || "127.0.0.1",
		username: process.env.PG_USERNAME || "",
		password: process.env.PG_PASSWORD || "",
		database: process.env.PG_DATABASE || "test",
	},
};
