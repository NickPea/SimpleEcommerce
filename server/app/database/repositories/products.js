
//

import db from "../drivers/sqlite";

class Products {
	//

	async firstSixProducts() {
		return await db
			.select('products.*', 'images.url_path as image_url')
			.from('products')
			.join('images', 'products.id', 'images.product_id');
	}
}

export default new Products();
