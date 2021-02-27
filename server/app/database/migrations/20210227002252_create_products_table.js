
//up
export function up(knex) {
	return knex.schema.createTable("products", function (table) {
		//
		table.increments("id");
		table.string('title');
		table.decimal('price', null, 2);
		table.text('description');
		table.timestamps();
	});
}

//down
export function down(knex) {
	return knex.schema.dropTable("products");
}
