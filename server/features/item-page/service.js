//

import Products from '../../database/repositories/products';

class ItemService {

    async getSingleProduct(productName) {
        return await Products.getProductByName(productName);
    }

}

export default new ItemService();