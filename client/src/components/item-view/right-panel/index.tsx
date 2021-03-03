//

import React from "react";
import styled from "styled-components";

//styles
const Wrapper = styled.div``;
const Padding = styled.div`
	padding: 5%;
`;
const Title = styled.div`
	margin-bottom: 20px;
	font-size: 1.6rem;
	font-weight: bolder;
	text-transform: capitalize;
`;
const Price = styled.div`
	margin: 20px 0;

	font-size: 1rem;
	font-weight: lighter;
`;
const Description = styled.div`
	margin: 20px 0;
	font-size: 0.8rem;
`;
const Button = styled.div`
	cursor: pointer;
	margin: 10px 0;
	width: 50%;
	@media (max-width: 600px) {
		width: 100%;
	}
	padding: 10px;
	text-transform: capitalize;
	text-align: center;
	font-size: 1.3rem;
	transition: 300ms;

	${(props) => {
		if (props.add_cart) {
			return `
				box-shadow: ${props.theme.boxshadow_light_pop};
				&:active {
					box-shadow: ${props.theme.boxshadow_light_press};
				}
			`;
		}
	}}

	${(props) => {
		if (props.buy_now) {
			return `
				border: 1px solid lightgrey;
				background-color: ${props.theme.smoothblack};
				color: white;
				&:active {
					background-color: white;
					color: ${props.theme.smoothblack};
				}
			`;
		}
	}}
`;

interface Types {
	title: string;
	price: string;
	description: string;
}

function ItemDetails({ title, price, description }: Types) {
	return (
		<Wrapper>
			<Padding>
				<Title>{title}</Title>
				<Price>{price}</Price>
				<Button add_cart>Add to Cart</Button>
				<Button buy_now>Buy Now</Button>
				<Description>{description}</Description>
			</Padding>
		</Wrapper>
	);
}

export default ItemDetails;
