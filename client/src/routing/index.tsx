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
function NavBar() {
	return (
		<nav>
			<Link to="/">Home</Link> {''}
			<Link to="/store">Store</Link> {/** -> item views */}
			<Link to="/cart">Cart</Link> {/** -> checkout */}
		</nav>
	);
}

//routes
const AppRouter = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route exact path="/">
					<LandingView />
				</Route>
				<Route exact path="/store">
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
