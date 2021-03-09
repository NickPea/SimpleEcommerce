// 

import path from "path";
const __dirname = path.dirname(new URL(import.meta.url).pathname);

import express from "express";

//section routers
const apiRouter = express.Router();
const spaRouter = express.Router();
const indexRouter = express.Router();
const prefixRouter = express.Router();

//feature routers
import LandingPageRouter from "../features/landing-page/router";
import StorePageRouter from '../features/store-page/router';
import ItemPageRouter from '../features/item-page/router';

//api routers
apiRouter.use("/landing-page", LandingPageRouter);
apiRouter.use('/store-page', StorePageRouter);
apiRouter.use('/item-page', ItemPageRouter);

//spa (catch all) route
spaRouter.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
});

indexRouter.use('/api', apiRouter);
indexRouter.use(spaRouter);

prefixRouter.use('/simple-ecommerce', indexRouter);

export default prefixRouter;




