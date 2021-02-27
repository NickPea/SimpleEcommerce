/**
 **/

import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
	client: "sqlite3",
	connection: {
		filename: path.resolve(__dirname, "./app/database/files/mydb.sqlite"),
	},
	migrations: {
		tableName: "migrations",
		directory: "./app/database/migrations",
		loadExtensions: [".js"],
		stub: path.resolve(__dirname, "./app/database/migration-stub.js"),
	},
	seeds: {
		directory: "./app/database/seeders",
		loadExtensions: [".js"],
		stub: path.resolve(__dirname, "./app/database/seeder-stub.js"),
	},
	useNullAsDefault: true,
};
