//

import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

//components
import SiteButton from "../../resusable-ui/button-rui";
import IconSizer from "../../resusable-ui/icon-sizer-rui";
import LineSpacer from "../../resusable-ui/line-spacer-rui";
import CartProductList from "./cart-list";

//resources
import CloseSVG from "../../../resources/icons/close-svg";

const PositionAndSize = styled.div<{show: boolean}>`
	position: fixed;
	top: 0;
	right: 0;
	width: 40%;
	@media (max-width: 600px) {
		width: 100%;
	}

	transition: transform 500ms;
	${(p) => {
		if (p.show) {
			return "transform: translateX(0vw)";
		} else {
			return "transform: translateX(100vw)";
		}
	}};
`;
const Wrapper = styled.div`
	height: 100vh;
	background-color: white;
	border-left: 1px solid lightgrey;
	padding: 10%;
	overflow-y: auto;
`;
const Header = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	padding: 5%;
	border-bottom: 1px solid lightgrey;
	margin-bottom: 10%;
`;
const Title = styled.div`
	font-size: 1.2rem;
`;
const CloseButton = styled.div`
	margin-left: auto;
`;
const TotalWrapper = styled.div`
	padding: 20px;
	display: flex;
	flex-flow: row nowrap;
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
const CheckoutButton = styled(SiteButton)`
	margin: 20px 0;
	padding: 30px 0px;
	text-align: center;
	background-color: ${(p) => p.theme.smoothblack};
	color: white;
	&:hover {
		background-color: white;
		color: ${(p) => p.theme.smoothblack};
	}
	/* &:active {
		background-color: ${(p) => p.theme.smoothblack};
		color: white;
	} */
`;

//util
const MarginLeftAuto = styled.div`
	margin-left: auto;
`;

function Cart() {
	const cartIsVisible = useSelector((state) => state.ui.cart_is_visible);
	const cartTotal = useSelector(state => state.app.cart.total);
	const dispatch = useDispatch();

	return (
		<PositionAndSize show={cartIsVisible}>
			<Wrapper>
				<Header>
					<Title>Cart</Title>
					<CloseButton onClick={() => dispatch({type: 'UI/CART-TOGGLE'})}>
						<SiteButton pop_up>
							<IconSizer h="20px" w="20px">
								<CloseSVG />
							</IconSizer>
						</SiteButton>
					</CloseButton>
				</Header>
				{/* list of cart items */}
				<CartProductList />
				{/* total price */}
				<LineSpacer margin="20px auto" width="90%" />
				<TotalWrapper>
					<TotalText>Total</TotalText>
					<MarginLeftAuto>
						<TotalText>${cartTotal}</TotalText>
					</MarginLeftAuto>
				</TotalWrapper>
				<CheckoutButton pop_up>Checkout</CheckoutButton>
				<SubText>* Not inclusive of shipping or taxes.</SubText>
			</Wrapper>
		</PositionAndSize>
	);
}

export default Cart;
