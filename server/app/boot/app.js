// Server Entry

// ------------------------------------------------------------------------------------------------
import express from "express";
// config
import config from "../config/app.js";
// ES6 module workaround
import path from "path";
const __dirname = path.dirname(new URL(import.meta.url).pathname);
//all routes
import routing from "../routing/index.js";
// ------------------------------------------------------------------------------------------------

const app = express();

//register event & listeners
import '../events/emitter/index.js';
import '../events/listeners/index.js';

//static file search in order/
app.use(express.static(path.join(__dirname, "../../../client/dist"))); //front-end files
app.use(express.static(path.join(__dirname, "../storage"))); //back-end files

//global middleware
import morgan from "morgan";
import cors from 'cors';
app.use(morgan("dev"));
app.use(cors({
	origin: 'http://localhost:8080',
}));

//routes
app.use(routing);

//fallback
app.use((req, res, next) => {
	res.sendStatus(404);
});

//errros
if (config.environment === "production") {
	app.use((err, req, res, next) => {
		res.status(500);
		res.send("500: An Internal Server Error Occurred");
	});
} //if

export default app;
