import React from "react";
import styled from "styled-components";
import SiteButton from "../../../resusable-ui/button-rui";
import IconSizer from "../../../resusable-ui/icon-sizer-rui";
import CartProductList from "./cart-product-list";

//resources
import CloseSVG from ".././../../resources/icons/close-svg";

const PositionAndSize = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	width: 40%;
	@media (max-width: 600px) {
		width: 100%;
	}

	transition: width 500ms;
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
	padding: 5%;
	overflow-y: visible;
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

interface PropTypes {
	open?: boolean;
}

function Cart({ open }: PropTypes) {
	return (
		<PositionAndSize show={open}>
			<Wrapper>
				<Header>
                    <Title>Cart</Title>
                    <CloseButton>
                        <SiteButton pop_up>
                            <IconSizer h="20px" w="20px">
                                <CloseSVG />
                            </IconSizer>
                        </SiteButton>
                    </CloseButton>
                </Header>

                {/* <LineSpacer /> */}
				<CartProductList />
			</Wrapper>
		</PositionAndSize>
	);
}

export default Cart;
