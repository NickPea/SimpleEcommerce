//

import express from "express";
const router = express.Router();

import Controller from "./Controller";

//test
router.get("/test", (req, res) => {
	res.send("working");
});

//prefix: '/api/landing-page'
router.get("/featured", Controller.getFeatured());

export default router;
