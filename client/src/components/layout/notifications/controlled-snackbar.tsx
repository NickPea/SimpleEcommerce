//

import React, { useState } from "react";
import { Snackbar } from "@material-ui/core";

interface Proptypes {}

const ControlledSnackBar = (props) => {
	const [_isOpen, set_isOpen] = useState(true);
	const handleClose = () => set_isOpen(false);

	return (
		<>
			<Snackbar
				{...props}
				open={_isOpen}
				onClose={handleClose}
			/>
		</>
	);
};

export default ControlledSnackBar;
