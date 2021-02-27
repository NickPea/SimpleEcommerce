//

import Products from "../../app/database/repositories/products";

class Service {
	//

	async getFeaturedProducts() {
		return await Products.firstSixProducts();
	}
}

export default new Service();
