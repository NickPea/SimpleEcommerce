//

import db from '../drivers/sqlite';

class Categories {

    async listAll() {
        return await db
            .select('*')
            .from('categories');
    }

    async getProductsOfFirstCategory() {

        const firstCategory = await db
            .select('name')
            .from('categories')
            .limit(1)

        const firstCategoryProducts = await db
            .select('products.*', 'images.url_path as image_url')
            .from('categories')
            .leftJoin('categories_products', 'categories.id', 'categories_products.category_id')
            .leftJoin('products', 'categories_products.product_id', 'products.id')
            .leftJoin('images', 'products.id', 'images.product_id')
            .where('categories.name', '=', firstCategory[0].name);

        return {title: firstCategory[0].name, products: firstCategoryProducts};

    }

    async getProductsPerCategory(categoryName) {

        const categoryProducts = await db
            .select('products.*', 'images.url_path as image_url')
            .from('categories')
            .leftJoin('categories_products', 'categories.id', 'categories_products.category_id')
            .leftJoin('products', 'categories_products.product_id', 'products.id')
            .leftJoin('images', 'products.id', 'images.product_id')
            .where('categories.name', '=', categoryName);

        return {title: categoryName, products: categoryProducts}
    }

}//class

export default new Categories();