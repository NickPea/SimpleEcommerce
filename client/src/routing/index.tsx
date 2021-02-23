//

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//pages
import LandingView from "../pages/landing-view";
import StoreView from "../pages/store-view";
import ItemView from "../pages/item-view";
import CartView from "../pages/cart-view";
import CheckoutView from "../pages/checkout-view";

//nav
import NavBar from "../layout/navbar";

//routes
const AppRouter = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route exact path="/landing">
					<LandingView />
				</Route>
				<Route exact path="/store">
					<StoreView />
				</Route>
				<Route exact path="/cart">
					<CartView />
				</Route>
				<Route exact path="/checkout">
					<CheckoutView />
				</Route>
				<Route exact path="/">
					<ItemView />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default AppRouter;
