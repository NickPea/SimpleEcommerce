//

import ItemService from './service';

class ItemController {

    getSingleProduct() {
        return async (req, res, next) => {
            try {
                const productName = req.params.product_name
                res.send(await ItemService.getSingleProduct(productName));

            } catch (error) {
                next(error);
            }
        }
    }

}//

export default new ItemController();