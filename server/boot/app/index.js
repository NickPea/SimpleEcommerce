// Server Entry

// ------------------------------------------------------------------------------------------------
import express from "express";
// config
import config from "../../config/app.js";
// ES6 module workaround
import path from "path";
const __dirname = path.dirname(new URL(import.meta.url).pathname);
//register events and listeners
import "../register-events.js";
//all routes
import routes from "../../routes/index.js";
//http loggin
import morgan from "morgan";
// ------------------------------------------------------------------------------------------------

const app = express();

//static/
app.use(express.static(path.join(__dirname, "public")));

//global middleware
app.use(morgan("dev"));

//routes
app.use(routes);

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
