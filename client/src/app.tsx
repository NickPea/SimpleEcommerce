//

import React, { Fragment } from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "styled-components";
import AppRouter from "./routing/index";

// global css
import "./app.css";

//theme
const styledTheme = {
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
		<React.Fragment>
			<ThemeProvider theme={styledTheme}>
				<AppRouter />
			</ThemeProvider>
		</React.Fragment>
	);
};

export default App;

ReactDom.render(<App />, document.querySelector("#root"));
