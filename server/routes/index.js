// main rounter

import express from "express";
const MainRouter = express.Router();

//routers
import sampleRouter from './testRouter.js'

//
MainRouter.use(sampleRouter);


export default MainRouter;
