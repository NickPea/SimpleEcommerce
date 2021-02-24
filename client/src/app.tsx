//

import React from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "styled-components";
import Routes from "./routes/index";
import { BrowserRouter } from "react-router-dom";

// global css
import "./app.css";
import NavBar from "./pages/layout/navbar";
import Footer from "./pages/layout/footer";
import Cart from './pages/layout/cart';

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

//entry
const App = () => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<NavBar />
				<Routes />
				<Footer />
				<Cart open />
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default App;

ReactDom.render(<App />, document.querySelector("#root"));
