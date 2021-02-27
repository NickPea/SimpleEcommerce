//

import express from "express";
const router = express.Router();

//routers
import LandingPageRouter from "../../features/landing-page/router";

router.get('/test', (req, res) => {
	res.send("api router working");
});

//features
router.use("/landing-page", LandingPageRouter);

export default router;
