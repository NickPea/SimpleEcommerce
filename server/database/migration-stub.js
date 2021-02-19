export function up(knex) {
	return knex.schema.createTable("new_table", function (table) {
		table.increments("id");
	});
}
export function down(knex) {
	return knex.schema.dropTable("new_table");
}
