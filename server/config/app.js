// app config

import dotenv from "dotenv";
import path from "path";

dotenv.config();

export default {
	port: process.env.PORT || 1234,
	environment: process.env.NODE_ENV || 'production'
};
