//

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Padding = styled.div`
	padding: 5%;
`;

//components
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useSelector } from "react-redux";

interface PropTypes {}

function Notifications({}: PropTypes) {
	const notifications = useSelector((state) => state.notifications);

	return (
		<Wrapper>
			<Padding>
				{notifications?.map((note) => {
					<Snackbar>
						<Alert severity={note.severity}>{note.message}</Alert>
					</Snackbar>;
				})}
			</Padding>
		</Wrapper>
	);
}

export default Notifications;
