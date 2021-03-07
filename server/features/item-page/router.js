//

import express from 'express';
const router = express.Router();

import ItemController from './controller';


router.get('/product/:product_name', ItemController.getSingleProduct());

export default router;