//

import React, { useState } from "react";
import styled from "styled-components";

//resources
import HamburgerSVG from "../../../resources/icons/hamburger-svg";
import CloseSVG from "../../../resources/icons/close-svg";

//styles
const Wrapper = styled.div`
`;

const Padding = styled.div`
	padding: 5%;
`;
const Background = styled.div`
	background-color: whitesmoke;
	border-radius: ${(p) => p.theme.borderradius_light};
`;
const TextPosition = styled.div`
	display: flex;
	flex-flow: column nowrap;
`;
const Title = styled.div`
	padding: 5%;
	font-size: 1.1rem;
	font-weight: bolder;
`;
const LineSpacer = styled.div`
	border-bottom: 1px solid grey;
	width: 90%;
	margin: 0 auto;
`;
const OptionsList = styled.div`
	padding: 5% 0;

	display: flex;
	flex-flow: column nowrap;
	align-items: center;
`;
const Option = styled.div`
	padding: 10px;
	font-size: 0.9rem;
	font-weight: lighter;
	color: ${(p) => p.theme.smoothblack};
	border-radius: ${(p) => p.theme.borderradius_light};
	cursor: pointer;
	&:hover {
		box-shadow: ${(p) => p.theme.boxshadow_light_pop};
		font-weight: bolder;
	}
	&:active {
		box-shadow: ${(p) => p.theme.boxshadow_light_press};
		transform: translateY(1px);
	}
`;

//on mobile
const OnMobileFixAndAnimateFilter = styled.div`
	@media (max-width: 600px) {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		transition: transform 150ms;
		transform: ${(p) => (p.show ? "translateX(0)" : "translateX(100vw)")};
	}
`;

const OnMobileOpenFilterButton = styled.div`
	display: none;
	@media (max-width: 600px) {
		display: block;
	}
`;
const OpenButtonPosition = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-end;
`;
const OpenButton = styled.div`
	margin: 5px;
	padding: 10px;
	border-radius: ${(p) => p.theme.borderradius_light};
	&:hover {
		box-shadow: ${(p) => p.theme.boxshadow_light_pop};
	}
	&:active {
		box-shadow: ${(p) => p.theme.boxshadow_light_press};
	}
`;

const OnMobileCloseFilterButton = styled.div`
	display: none;
	@media (max-width: 600px) {
		display: block;
	}
`;
const CloseButtonPosition = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	margin: 7%;
`;
const CloseButton = styled.div`
	padding: 10px;
	border-radius: ${(p) => p.theme.borderradius_light};
	&:hover {
		box-shadow: ${(p) => p.theme.boxshadow_light_pop};
	}
	&:active {
		box-shadow: ${(p) => p.theme.boxshadow_light_press};
	}
`;

//util
const IconSize = styled.div`
	height: ${(p) => p.h};
	width: ${(p) => p.w};
`;


//component
const Filter = () => {
	const [_isMobileFilterShown, set_isMobileFilterShown] = useState(false);

	return (
		<Wrapper>
			<OnMobileOpenFilterButton>
				<OpenButtonPosition>
					<OpenButton onClick={() => set_isMobileFilterShown(true)}>
						<IconSize h="20px" w="20px">
							<HamburgerSVG />
						</IconSize>
					</OpenButton>
				</OpenButtonPosition>
			</OnMobileOpenFilterButton>
			<OnMobileFixAndAnimateFilter show={_isMobileFilterShown}>
				<Padding>
					<Background>
						<OnMobileCloseFilterButton>
							<CloseButtonPosition>
								<CloseButton onClick={()=> set_isMobileFilterShown(false)}>
									<IconSize h="20px" w="20px">
										<CloseSVG />
									</IconSize>
								</CloseButton>
							</CloseButtonPosition>
						</OnMobileCloseFilterButton>
						<TextPosition>
							<Title>Category</Title>
							<LineSpacer />
							<OptionsList>
								<Option>Road</Option>
								<Option>Mountain</Option>
								<Option>Commuter</Option>
								<Option>Recreational</Option>
								<Option>BMX</Option>
								<Option>Kids</Option>
							</OptionsList>
							<Title>Price</Title>
							<LineSpacer />
							<OptionsList>
								<Option>More than $5000</Option>
								<Option>$1500 to $5000</Option>
								<Option>Less than $1500</Option>
							</OptionsList>
						</TextPosition>
					</Background>
				</Padding>
			</OnMobileFixAndAnimateFilter>
		</Wrapper>
	);
};

export default Filter;
