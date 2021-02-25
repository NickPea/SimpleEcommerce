// main rounter

import express from "express";
const indexRouter = express.Router();

//routers
import testRouter from './testRouter'
import appRouter from './appRouter'

//
indexRouter.use(testRouter);
indexRouter.use(appRouter);




export default indexRouter;
