//

import express from 'express';
import app from '../../config/app';
const router = express.Router();

import StoreController from './controller'

router.get('/test', (req, res, next) => {
    res.send('store page router workings');
})

router.get('/categories', StoreController.getCategories());
router.get('/products/first-category', StoreController.getProductsOfFirstCategory());
router.get('/products/category/:category_name', StoreController.getProductsPerCategory());
router.get('/products/price/greaterthan5000', StoreController.getProductsGreaterThan5000());
router.get('/products/price/between1500and5000', StoreController.getProductsBetween1500And5000());
router.get('/products/price/lessthan1500', StoreController.getProductsLessThan1500());



export default router;