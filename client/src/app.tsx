//

import React, { Fragment } from "react";
import ReactDom from "react-dom";
import AppRouter from "./routing/index";

//

const App = () => {
	return (
		<React.Fragment>
			<AppRouter />
		</React.Fragment>
	);
};

export default App;

ReactDom.render(<App />, document.querySelector("#root"));
