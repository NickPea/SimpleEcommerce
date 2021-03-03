import React, { useState } from "react";
import styled from "styled-components";

//components
import Counter from "../counter";

//fake data
import { cartProducts } from "../../../../fake-product-data";
import SiteButton from "../../../resusable-ui/button-rui";

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
		background-color: rgba(216,65,57,1);
	}
`;
//util
const MarginLeftAuto = styled.div`
	margin-left: auto;
`;

interface Proptypes {}

function CartList({}: Proptypes) {
	return (
		<List>
			{cartProducts.map((product, i) => {
				return (
					<Product key={i}>
						<FlexRow>
							<ImageWrapper>
								<Image src={product.imgUrl} />
							</ImageWrapper>
							<DetailsWrapper>
								<Title>{product.title}</Title>
								<Price>{product.price}</Price>
							</DetailsWrapper>
						</FlexRow>
						<FlexRow>
							<RemoveButton>Remove</RemoveButton>
							<MarginLeftAuto>
								<Counter start={product.count} />
							</MarginLeftAuto>
						</FlexRow>
					</Product>
				);
			})}
		</List>
	);
}

export default CartList;
