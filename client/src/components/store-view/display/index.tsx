//

import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'

//fake data
import { storeProducts } from "../../../fake-product-data";

const Wrapper = styled.div``;

const Padding = styled.div`
	padding: 5%;
`;
const DynamicTitle = styled.div`
	text-transform: capitalize;
	font-size: 1.3rem;
	font-weight: bolder;
`;

//products ------------------------------------------------------------------------------------------ //
const ProductContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	padding: 20px;
`;
const ProductImage = styled.img`
	height: 300px;
	width: 100%;
	object-fit: contain;

	@media (max-width: 768px) {
		height: 200px;
	}
	@media (max-width: 600px) {
		height: 150px;
	}
`;
const ProductText = styled.div`
	text-transform: capitalize;
	text-align: center;
	border-top: 1px solid lightgrey;
	border-bottom: 1px solid lightgrey;

	transition: 500ms;
`;
const ProductTitle = styled.div`
	font-size: 1.1.rem;
	font-weight: bold;
`;
const ProductPrice = styled.div`
	font-size: 0.9rem;
	font-weight: lighter;
`;
const ProductHover = styled.div`
	&:hover ${ProductText} {
		background-color: ${(p) => p.theme.smoothblack};
		color: white;
	}
	&:hover ${ProductImage} {
		box-shadow: ${(p) => p.theme.boxshadow_light_pop};
	}
`;
const RouteLink = styled(Link)`
	text-decoration: none;
	color: inherit;
`;
// ----------------------------------------------------------------------------------------------- //

const ProductDisplay = () => {
	const display = useSelector((state) => state.data.store_page.display);

	return (
		<Wrapper>
			<Padding>
				<DynamicTitle>{display.title}</DynamicTitle>
				{/* products */}
				<div className="row">
					{display.products.map((product, index) => {
						return (
							<div className="xs-col-12 md-col-6" key={product.id}>
								<RouteLink to={`/item/${product.title}`}>
									<ProductContainer>
										<ProductHover>
											<ProductImage src={product.image_url} />
											<ProductText>
												<ProductTitle>{product.title}</ProductTitle>
												<ProductPrice>${product.price}</ProductPrice>
											</ProductText>
										</ProductHover>
									</ProductContainer>
								</RouteLink>
							</div>
						);
					})}
				</div>
			</Padding>
		</Wrapper>
	);
};

export default ProductDisplay;
