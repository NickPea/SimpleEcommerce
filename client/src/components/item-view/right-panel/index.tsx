//

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
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

interface PropTypes {}

function ItemDetails() {

	const dispatch = useDispatch();

	const product = useSelector((state) => state.data.item_page.product);

	const handleClickAddToCart = () => {
		dispatch({type: 'APP/CART/ITEMS/ADD/START', payload: {product: product, quantity: 1}})
	}
	const handleClickByNow = () => {
		dispatch({type: 'APP/CART/ITEMS/ADD-&-CHECKOUT/START', payload: {product: product, quantity: 1}});
	}

	return (
		<Wrapper>
			<Padding>
				<Title>{product.title}</Title>
				<Price>${product.price}</Price>
				<Button add_cart onClick={handleClickAddToCart}>Add to Cart</Button>
				<Button buy_now onClick={handleClickByNow}>Buy Now</Button>
				<Description>{product.description}</Description>
			</Padding>
		</Wrapper>
	);
}

export default ItemDetails;
