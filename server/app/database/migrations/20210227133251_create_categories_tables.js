
//up
export function up(knex) {
	return knex.schema
		.createTable("categories", function (table) {
			//PK
			table.increments("id");
			//ATT
			table.string('name')
			//TS
			table.timestamps();
		})
		.createTable('categories_products', function (table) {
			//PK
			table.primary(['category_id', 'product_id']);
			//FK
			table.integer('category_id').unsigned().notNullable();
			table.foreign('category_id').references('id').inTable('categories');
			table.integer('product_id').unsigned().notNullable();
			table.foreign('product_id').references('id').inTable('products');
			//TS
			table.timestamps();
		});
}

//down
export function down(knex) {
	return knex.schema
		.dropTable("categories")
		.dropTable("categories_products");
}
