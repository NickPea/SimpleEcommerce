// sample routes

import express from "express";
const router = express.Router();

import TestController from "../controllers/TestController.js";

router.get("/test", TestController.index());

export default router;
