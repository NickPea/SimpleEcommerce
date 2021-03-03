//

import React from "react";
import styled from "styled-components";

//fake data
import {storeProducts} from "../../../fake-product-data";

const Wrapper = styled.div``;

const Padding = styled.div`
	padding: 5%;
`;
const DynamicTitle = styled.div`
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
// ----------------------------------------------------------------------------------------------- //

const ProductDisplay = () => {
	return (
		<Wrapper>
			<Padding>
				<DynamicTitle>Road</DynamicTitle>
				{/* products */}
				<div className="row">
					{storeProducts.map((prod, index) => {
						return (
							<div className="xs-col-12 md-col-6" key={index}>
								<ProductContainer>
									<ProductHover>
										<ProductImage src={prod.imgUrl} />
										<ProductText>
											<ProductTitle>{prod.title}</ProductTitle>
											<ProductPrice>{prod.price}</ProductPrice>
										</ProductText>
									</ProductHover>
								</ProductContainer>
							</div>
						);
					})}
				</div>
			</Padding>
		</Wrapper>
	);
};

export default ProductDisplay;
