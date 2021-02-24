//

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//pages
import LandingView from "../pages/landing-view";
import StoreView from "../pages/store-view";
import ItemView from "../pages/item-view";
import CheckoutView from "../pages/checkout-view";

//routes
const AppRouter = () => {
	return (
		<Switch>
			<Route exact path="/landing">
				<LandingView />
			</Route>
			<Route exact path="/store">
				<StoreView />
			</Route>
			<Route exact path="/">
				<CheckoutView />
			</Route>
			<Route exact path="/item">
				<ItemView />
			</Route>
		</Switch>
	);
};

export default AppRouter;
