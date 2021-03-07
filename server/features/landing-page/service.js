//

import Products from "../../database/repositories/products";

class Service {
	//

	async getFeaturedProducts() {
		return await Products.firstSixProducts();
	}
}

export default new Service();
