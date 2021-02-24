import React, { useState } from "react";
import styled from "styled-components";

//fake data
import { cartProducts } from "../../../../fake-product-data";

const List = styled.div`
	display: flex;
	flex-flow: column nowrap;
`;
const Product = styled.div`
	padding: 5%;
	display: flex;
	flex-flow: row nowrap;
`;
const ImageWrapper = styled.div`
	flex: 30%;
	margin-right: 20px;
`;
const Image = styled.img`
	object-fit: contain;
	width: 100%;
`;
const TextWrapper = styled.div`
	flex: 40%;
`;
const Title = styled.div`
	margin-bottom: 10px;
	font-size: 0.8rem;
`;
const Price = styled.div`
	font-size: 0.5rem;
`;
const CountWrapper = styled.div`
	flex: 30%;
	/* display: flex; */
	/* justify-content: center;
	align-items: center; */
`;


interface Proptypes {}

function CartList({}: Proptypes) {
	return (
		<List>
			{cartProducts.map((product, i) => {
				return (
					<Product key={i}>
						<ImageWrapper>
							<Image src={product.imgUrl} />
						</ImageWrapper>
						<TextWrapper>
							<Title>{product.title}</Title>
							<Price>{product.price}</Price>
						</TextWrapper>
						<CountWrapper>
							<Count start={product.count} />
						</CountWrapper>
					</Product>
				);
			})}
		</List>
	);
}

export default CartList;
