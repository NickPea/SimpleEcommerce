
//

import db from "../drivers/sqlite";

class Products {
	//

	async firstSixProducts() {
		return await db.select("*").from("products").limit(6);
	}
}

export default new Products();
