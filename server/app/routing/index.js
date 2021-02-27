// main rounter

import express from "express";
const indexRouter = express.Router();

//routers
import apiRouter from "./apiRouter";
import spaRouter from "./spaRouter";

//prefix
indexRouter.use('/api', apiRouter);
indexRouter.use(spaRouter);

export default indexRouter;
