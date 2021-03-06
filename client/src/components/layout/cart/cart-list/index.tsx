import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

//components
import Counter from "../counter";

//fake data
import SiteButton from "../../../resusable-ui/button-rui";
import { useSelector } from "react-redux";

const List = styled.div`
	display: flex;
	flex-flow: column nowrap;
`;
const Product = styled.div`
	padding: 5%;
`;
const FlexRow = styled.div`
	display: flex;
	flex-flow: row nowrap;
`;
const ImageWrapper = styled.div`
	flex: 30%;
`;
const Image = styled.img`
	object-fit: contain;
	width: 100%;
`;
const DetailsWrapper = styled.div`
	padding: 20px;
	flex: 70%;
`;
const Title = styled.div`
	font-size: 1rem;
`;
const Price = styled.div`
	font-size: 0.8rem;
`;
const RemoveButton = styled(SiteButton)`
	background-color: rgba(243, 211, 217, 1);
	color: white;
	&:hover {
		font-weight: bolder;
		background-color: rgba(216, 65, 57, 1);
	}
`;
const CartEmpty = styled.div`
	padding: 5%;
`;
//util
const MarginLeftAuto = styled.div`
	margin-left: auto;
`;

interface Proptypes {}

function CartList({}: Proptypes) {
	const cartItems = useSelector((state) => state.app.cart.items);
	const dispatch = useDispatch();
	const handleClickRemoveItem = (itemIndex: number, cartItem) => {
		dispatch({
			type: "APP/CART/ITEMS/REMOVE/START",
			payload: {
				indexToRemove: itemIndex,
				item: cartItem,
			},
		});
	};

	return (
		<List>
			{cartItems.length === 0 ? (
				<CartEmpty>Your cart is empty.</CartEmpty>
			) : (
				cartItems.map((item, index) => {
					return (
						<Product key={item.product.id}>
							<FlexRow>
								<ImageWrapper>
									<Image src={item.product.image_url} />
								</ImageWrapper>
								<DetailsWrapper>
									<Title>{item.product.title}</Title>
									<Price>${item.product.price}</Price>
								</DetailsWrapper>
							</FlexRow>
							<FlexRow>
								<RemoveButton onClick={() => handleClickRemoveItem(index, item)}>
									Remove
								</RemoveButton>
								<MarginLeftAuto>
									<Counter
										quantity={item.quantity}
										productId={item.product.id}
									/>
								</MarginLeftAuto>
							</FlexRow>
						</Product>
					);
				})
			)}
		</List>
	);
}

export default CartList;
