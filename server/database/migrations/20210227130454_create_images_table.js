
//up
export function up(knex) {
	return knex.schema.createTable("images", function (table) {
		//
		table.increments("id");
		table.string('url_path').notNullable();
		//FK
		table.integer('product_id').unsigned().notNullable();
		table.foreign('product_id').references('id').inTable('products').onDelete('cascade');
	});
}

//down
export function down(knex) {
	return knex.schema.dropTable("images");
}
