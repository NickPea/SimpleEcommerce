// Test Service

import TestRespository from "../data/repositories/TestRespository.js";

class TestService {
	index() {
		return TestRespository.getTestMessage();
	}
}

export default new TestService();
