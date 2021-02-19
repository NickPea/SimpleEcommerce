/**
 * Entry point for 
 */

import app from './app/index.js'
import config from "../config/app.js";

const port = config.port;

app.listen(port, () => {
	console.log(`-- Server listening on port ${port} --`);
});
