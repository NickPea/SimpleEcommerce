//

import express from "express";
const router = express.Router();

import Controller from "./controller";

//test
router.get("/test", (req, res) => {
	res.send("landing page router working");
});

//prefix: '/api/landing-page'
router.get("/featured/init", Controller.getFeatured());

export default router;
