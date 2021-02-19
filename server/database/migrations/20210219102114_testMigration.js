export function up(knex) {
	return knex.schema.createTable("test", function (table) {
		table.increments("id");
		table.text('message');
	});
}
export function down(knex) {
	return knex.schema.dropTable("test");
}
