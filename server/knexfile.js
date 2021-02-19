/**
 **/

export default {
	client: "postgresql",
	connection: {
		database: "test",
		username: "",
		password: "",
	},
	migrations: {
		tableName: "migrations",
		directory: "./database/migrations",
		loadExtensions: [".js"],
		stub: "./database/migration-stub.js",
	},
	seeds: {
		directory: "./database/seeds",
		loadExtensions: [".js"],
		stub: "./database/seeder-stub.js",
	},
};
