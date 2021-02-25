//

import React from "react";
import styled from "styled-components";

//fake data
import { cartProducts } from "../../../fake-product-data";

//components
import SiteButton from "../../../resusable-ui/button-rui";
import IconSizer from "../../../resusable-ui/icon-sizer-rui";
import LineSpacer from "../../../resusable-ui/line-spacer-rui";

//styles
const Wrapper = styled.div``;
const List = styled.div`
	display: flex;
	flex-flow: column nowrap;
`;
const Product = styled.div`
	padding: 0px 5%;
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
	font-size: 1.2rem;
`;
const Price = styled.div`
	font-size: 0.8rem;
`;
const Count = styled.div`
    margin: 10px 0;
    font-size: 1rem;
`;
const Padding = styled.div`
	padding: 5%;
`;
const TotalWrapper = styled.div`
    padding: 20px;
	display: flex;
	flex-flow: row nowrap;

	background-color: whitesmoke;
`;
const TotalText = styled.div`
	font-size: 1.3rem;
	font-weight: bold;
`;
const SubText = styled.div`
	padding: 20px 0;
	font-size: 0.8rem;
	font-weight: lighter;
`;
const SubtleText = styled.div`
	padding: 20px;
	color: grey;
	text-decoration: underline;
	font-size: 0.9rem;
	font-weight: bolder;
`;
//util
const MarginLeftAuto = styled.div`
	margin-left: auto;
`;

interface Proptypes {}

function CartSummary({}: Proptypes) {
	return (
		<Wrapper>
			<SubtleText>Order Summary</SubtleText>
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
                                    <Count>x{product.count}</Count>
								</DetailsWrapper>

							</FlexRow>
						</Product>
					);
				})}
			</List>
			<LineSpacer margin="20px auto" width="90%" />
			<Padding>
                <TotalWrapper>
                    <TotalText>Total</TotalText>
                    <MarginLeftAuto>
                        <TotalText>$2355.00*</TotalText>
                    </MarginLeftAuto>
                </TotalWrapper>
                <SubText>* Not inclusive of shipping or taxes.</SubText>
            </Padding>
		</Wrapper>
	);
}

export default CartSummary;
