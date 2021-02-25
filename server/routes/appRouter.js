//

import express from "express";
const router = express.Router();

import path from "path";
const __dirname = path.dirname(new URL(import.meta.url).pathname);


router.get('*', (req, res) => {
	res.sendFile(path.resolve( __dirname, '../../client/dist/index.html'));
});

export default router;
