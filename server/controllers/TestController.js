// sample controller

import TestService from "../services/TestService.js";

class TestController {
	constructor() {}

	index() {
		return async (req, res, next) => {
			try {
				const serviceResults = await TestService.index();
				res.send(serviceResults);
			} catch (error) {
				next(error);
			}
		};
	} //
}

export default new TestController();
