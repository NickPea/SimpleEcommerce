//

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Padding = styled.div`
	padding: 5%;
`;

//components
import { Backdrop, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

interface PropTypes {}

function LoadingCloak({}: PropTypes) {
	
	const app_is_loading = useSelector((state) => state.ui.app_is_loading);

	return (
		<Wrapper>
			<Padding>
				<Backdrop open={app_is_loading}>
					<CircularProgress />
				</Backdrop>
			</Padding>
		</Wrapper>
	);
}

export default LoadingCloak;
