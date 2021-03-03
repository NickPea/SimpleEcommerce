//

import React, { Fragment, useEffect } from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "styled-components";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

//service container
import './services';

//babel-polyfill-hack for generator functions
import "regenerator-runtime/runtime";

// global css
import "./app.css";

//theme
const theme = {
	// colors
	smoothblack: "rgb(25, 25, 25)",
	neonblue: "rgba(4,217,255,1)",
	//boxes
	borderradius_light: "5px",
	backgroundcolor_transparent: "rgba(0,0,0,0.5)",
	boxshadow_light_pop: "0 1px 5px grey",
	boxshadow_light_press: "0 1px 5px grey inset",
};

//state
import { Provider, useDispatch } from "react-redux";
import store from "./state/store";

//components
import NavBar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import Cart from "./components/layout/cart";
import Notifications from "./components/layout/notifications";
import LoadingCloak from "./components/layout/loading-cloak";

//entry
const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: "APP/INIT" });
	}, []);

	return (
		<Fragment>
			<NavBar />
			<Routes />
			<Footer />
			<Cart />
			<Notifications />
			<LoadingCloak />
		</Fragment>
	);
};

export default App;

ReactDom.render(
	<Provider store={store}>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</Provider>,
	document.querySelector("#root"),
);
