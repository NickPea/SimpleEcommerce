//

//resources
import img1URL from "../resources/images/electro_steer.jpg";
import img2URL from "../resources/images/patio_patrol.png";
import img3URL from "../resources/images/groovy_mobile.jpg";
import img4URL from "../resources/images/skate_park.png";
import img5URL from "../resources/images/traffic_cheat.jpg";
import img6URL from "../resources/images/weekend_sail.png";

export const featuredProducts = [
	{ imgUrl: img1URL, title: "hot streak", price: "$2300.00" },
	{ imgUrl: img2URL, title: "patio patrol", price: "$170.00" },
	{ imgUrl: img3URL, title: "groovy mobile", price: "$850.00" },
	{ imgUrl: img4URL, title: "skate park", price: "$560.00" },
	{ imgUrl: img5URL, title: "traffic cheat", price: "$1200.00" },
	{ imgUrl: img6URL, title: "weekend sail", price: "$330.00" },
];

export const storeProducts = [
	{
		imgUrl: img1URL,
		title: "raptor",
		price: "$300",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
	{
		imgUrl: img2URL,
		title: "x-glide",
		price: "$25000",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
	{
		imgUrl: img3URL,
		title: "vesper 2",
		price: "$1200",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
	{
		imgUrl: img4URL,
		title: "grifter",
		price: "$4999",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
];

export const singleStoreProduct = () => {
	return storeProducts[Math.floor(Math.random() * storeProducts.length)];
};
