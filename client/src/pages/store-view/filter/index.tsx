//

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
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
    font-size: 1.1rem;
    font-weight: bolder;
`;
const Option = styled.div`
	font-size: 0.9rem;
	font-weight: lighter;
	color: ${(p) => p.theme.smoothblack};
`;


const Filter = () => {
	return (
		<Wrapper>
			<Background>
				<TextPosition>
					<Title>Category</Title>
					<Option>Road</Option>
					<Option>Mountain</Option>
					<Option>Commuter</Option>
					<Option>Recreational</Option>
					<Option>BMX</Option>
					<Option>Kids</Option>
					<Title>Price</Title>
				</TextPosition>
			</Background>
		</Wrapper>
	);
};

export default Filter;
