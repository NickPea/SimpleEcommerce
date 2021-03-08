//

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Padding = styled.div`
	padding: 5%;
`;
const RaisedBackdrop = styled(Backdrop)`
	z-index: 99999999999999999999999999999999999999999999999999999999999 !important;
`;

//components
import { Backdrop, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

interface PropTypes {}

function Loading({}: PropTypes) {
	const isLoading = useSelector((state) => state.ui.loading);

	return (
		<Wrapper>
			<Padding>
				<RaisedBackdrop open={isLoading}>
					<CircularProgress />
				</RaisedBackdrop>
			</Padding>
		</Wrapper>
	);
}

export default Loading;
