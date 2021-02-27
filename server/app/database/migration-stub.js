
//up
export function up(knex) {
	return knex.schema.createTable("table", function (table) {
		//
		table.increments("id");
		table.timestamps();

	});
}

//down
export function down(knex) {
	return knex.schema.dropTable("table");
}
