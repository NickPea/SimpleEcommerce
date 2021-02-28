//

import React from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "styled-components";
import Routes from "./routes/index";
import { BrowserRouter } from "react-router-dom";

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

//components
import NavBar from "./pages/layout/navbar";
import Footer from "./pages/layout/footer";
import Cart from './pages/layout/cart';

//state
import {Provider} from 'react-redux'
import store from './state/store'

//entry
const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<NavBar />
					<Routes />
					<Footer />
					<Cart />
				</ThemeProvider>
			</BrowserRouter>
		// </Provider>
	);
};

export default App;

ReactDom.render(<App />, document.querySelector("#root"));
