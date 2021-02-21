//

import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

//pages
const LandingView = () => {
	return <div>Landing view</div>;
};
const StoreView = () => {
	return <div>Store view</div>;
};
const ItemView = () => {
	return <div>Item view</div>;
};
const CartView = () => {
	return <div>Cart view</div>;
};
const CheckoutView = () => {
	return <div>Checkout view</div>;
};

//nav
function NavBar() {
	return (
		<nav>
			<Link to="/">Home</Link>
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
