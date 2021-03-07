//

import Categories from '../../database/repositories/categories';
import Products from '../../database/repositories/products'

class StoreService {
    
    async getCategories() {
        return await Categories.listAll();
    }
    async getProductsOfFirstCategory() {
        return await Categories.getProductsOfFirstCategory();
    }
    async getProductsPerCategory(categoryName) {
        return await Categories.getProductsPerCategory(categoryName);
    }
    async getProductsGreaterThan5000() {
        return await Products.getProductsGreaterThan5000();
    }
    async getProductsBetween1500And5000() {
        return await Products.getProductsBetween1500And5000();
    }
    async getProductsLessThan1500() {
        return await Products.getProductsLessThan1500();
    }
}

export default new StoreService();