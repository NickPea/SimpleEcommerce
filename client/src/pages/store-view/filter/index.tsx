//

import React from "react";
import styled from "styled-components";

const HideFixedFilterOnMobile = styled.div`
	@media (max-width: 600px) {
		display: none;
	}
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
	border-radius: ${p=>p.theme.borderradius_light};
	cursor: pointer;
	&:hover {
		box-shadow: ${p=>p.theme.boxshadow_light_pop};
		font-weight: bolder;
	}
	&:active {
		box-shadow: ${p=>p.theme.boxshadow_light_press};
		transform: translateY(1px);
	}
`;

const Filter = () => {
	return (
		<HideFixedFilterOnMobile>
			<Padding>
				<Background>
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
		</HideFixedFilterOnMobile>
	);
};

export default Filter;
