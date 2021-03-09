//

import Service from "./service";

class Controller {
	//

	getFeatured() {
		return async (req, res, next) => {
			try {
				res.send(await Service.getFeaturedProducts());
			} catch (err) {
				next(err);
			}
		};
	}
} //

export default new Controller();
