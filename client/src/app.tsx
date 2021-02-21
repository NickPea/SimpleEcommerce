//

import React, { Fragment } from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "styled-components";
import AppRouter from "./routing/index";

// global css
import "./app.css";

//theme
const styledTheme = {
	primary: 'grey',
	secondary: 'lightgrey',
	
};

//
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
