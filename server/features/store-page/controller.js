//

import StoreService from './service';

class StoreController {

    getCategories() {
        return async (req, res, next) => {
            try {
                res.send(await StoreService.getCategories());
            } catch (error) {
                next(error);
            }
        }
    }

    getProductsOfFirstCategory() {
        return async (req, res, next) => {
            try {
                res.send(await StoreService.getProductsOfFirstCategory())
            } catch (error) {
                next(error);
            }
        }
    }
    getProductsPerCategory() {
        return async (req, res, next) => {
            try {
                const categoryName = req.params.category_name
                res.send(await StoreService.getProductsPerCategory(categoryName))
            } catch (error) {
                next(error);
            }
        }
    }
    getProductsGreaterThan5000() {
        return async (req, res, next) => {
            try {
                res.send(await StoreService.getProductsGreaterThan5000());
            } catch (error) {
                next(error);
            }
        }

    }
    getProductsBetween1500And5000() {
        return async (req, res, next) => {
            try {
                res.send(await StoreService.getProductsBetween1500And5000());
            } catch (error) {
                next(error);
            }
        }

    }
    getProductsLessThan1500() {
        return async (req, res, next) => {
            try {
                res.send(await StoreService.getProductsLessThan1500());
            } catch (error) {
                next(error);
            }
        }
    }

}//class

export default new StoreController();