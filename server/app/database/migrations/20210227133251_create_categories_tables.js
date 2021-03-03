
//up
export function up(knex) {
	return knex.schema
		.createTable("categories", function (table) {
			table.increments("id");
			table.string('name')
			table.timestamps();
		})
		.createTable('categories_products', function (table) {
			table.primary(['category_id', 'product_id']);
			table.timestamps();
			//FK
			table.integer('category_id').unsigned().notNullable();
			table.foreign('category_id').references('id').inTable('categories');
			table.integer('product_id').unsigned().notNullable();
			table.foreign('product_id').references('id').inTable('products');
		});
}

//down
export function down(knex) {
	return knex.schema
		.dropTable("categories")
		.dropTable("categories_products");
}
