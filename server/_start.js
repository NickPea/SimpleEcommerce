/**
 * Entry point for 
 */

import app from './_app.js'
import config from "./config/app.js";

const port = config.port;

app.listen(port, () => {
	console.log(`-- Server listening on port ${port} --`);
});
