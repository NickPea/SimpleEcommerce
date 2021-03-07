
//

import db from "../drivers/sqlite";

class Products {
	//

	async getProductByName (productName) {
		return await db
			.select('products.*', 'images.url_path as image_url')
			.from('products')
			.leftJoin('images', 'products.id', 'images.product_id')
			.where('products.title', '=', productName)
			.first();
	}

	async firstSixProducts() {
		return await db
			.select('products.*', 'images.url_path as image_url')
			.from('products')
			.join('images', 'products.id', 'images.product_id')
			.limit(6);
	}
	async getProductsGreaterThan5000() {
		const priceResults = await db
			.select('products.*', 'images.url_path as image_url')
			.from('products')
			.leftJoin('images', 'products.id', 'images.product_id')
			.where('products.price', '>', 5000);

		return { title: 'greater than $5000', products: priceResults };

	}
	async getProductsBetween1500And5000() {
		const priceResults = await db
			.select('products.*', 'images.url_path as image_url')
			.from('products')
			.leftJoin('images', 'products.id', 'images.product_id')
			.whereBetween('products.price', [1500, 5000]);

		return { title: 'between $1500 and $5000', products: priceResults };

	}
	async getProductsLessThan1500() {
		const priceResults = await db
			.select('products.*', 'images.url_path as image_url')
			.from('products')
			.leftJoin('images', 'products.id', 'images.product_id')
			.where('products.price', '<', '1500');

		return { title: 'less than $1500', products: priceResults };

	}
}

export default new Products();
