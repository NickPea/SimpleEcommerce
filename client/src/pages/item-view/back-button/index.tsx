//

import React from "react";
import styled from "styled-components";

//components
import IconSizerRUI from "../../../resusable-ui/icon-sizer-rui";
import ButtonRUI from "../../../resusable-ui/button-rui";

//resources
import BackSVG from "../../../resources/icons/back-svg";
import { useHistory } from "react-router-dom";

//styles
const Wrapper = styled.div``;
const Position = styled.div`
	display: flex;
	flex-flow: row nowrap;

	justify-content: flex-start;
	margin: 2%;
`;

const BackButton = () => {
	const reactHistory = useHistory();
	return (
		<Wrapper>
			<Position>
				<ButtonRUI pop_up onClick={() => reactHistory.goBack()}>
					<IconSizerRUI h="30px" w="30px">
						<BackSVG />
					</IconSizerRUI>
				</ButtonRUI>
			</Position>
		</Wrapper>
	);
};

export default BackButton;
