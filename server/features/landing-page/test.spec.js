//

import LandingPageService from "./service";

describe('Landing Page Feature', () => {

	test('should return 0-6 featured products with shape of...', async () => {
		const data = await LandingPageService.getFeaturedProducts();
		expect(data.length).toBeGreaterThan(0);
		expect(data.length).toBeLessThanOrEqual(6);
		expect(data[Math.floor(Math.random() * 6)].hasOwnProperty('id')).toBeTruthy();
		expect(data[Math.floor(Math.random() * 6)].hasOwnProperty('title')).toBeTruthy();
		expect(data[Math.floor(Math.random() * 6)].hasOwnProperty('price')).toBeTruthy();
		expect(data[Math.floor(Math.random() * 6)].hasOwnProperty('description')).toBeTruthy();
	});


});
