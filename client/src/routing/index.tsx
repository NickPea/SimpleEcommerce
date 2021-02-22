//

import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

//pages
import LandingView from "../pages/landing-view";
import StoreView from "../pages/store-view";
import ItemView from "../pages/item-view";
import CartView from "../pages/cart-view";
import CheckoutView from "../pages/checkout-view";

//nav
import NavBar from '../layout/navbar';

//routes
const AppRouter = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route exact path="/landing">
					<LandingView />
				</Route>
				<Route exact path="/">
					<StoreView />
				</Route>
				<Route exact path="/item">
					<ItemView />
				</Route>
				<Route exact path="/cart">
					<CartView />
				</Route>
				<Route exact path="/checkout">
					<CheckoutView />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default AppRouter;
