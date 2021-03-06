//

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ControlledSnackBar from "./controlled-snackbar";
import { Button } from "@material-ui/core";
import styled from "styled-components";

//styleds
const StyledButton = styled(Button)`
	color: white;
`;

interface PropTypes {}

function Notifications({}: PropTypes) {
	const notifications = useSelector((state) => state.app.notifications);
	const dispatch = useDispatch();

	return (
		<>
			{notifications.map((notification, index) => {
				return (
					<ControlledSnackBar
						key={index}
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "left",
						}}
						autoHideDuration={5000}
						message={notification.message}
						action={
							notification.action ? (
								<StyledButton
									color="inherit"
									variant="outlined"
									size="small"
									onClick={() => dispatch(notification.action.dispatch)}
								>
									{notification.action.title}
								</StyledButton>
							) : null
						}
					/>
				);
			})}
		</>
	);
}

export default Notifications;
