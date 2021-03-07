//

import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//components
import CartSummary from "./cart-summary";
import CustomerForm from "./customer-form";
import SiteButton from "../resusable-ui/button-rui";

//styles
const Page = styled.div``;
const Layout = styled.div`
	display: flex;
	flex-flow: row wrap;
`;
const LeftPanel = styled.div`
	flex: 60%;
	@media (max-width: 600px) {
		order: 2;
		flex: 100%;
	}
`;
const RightPanel = styled.div`
	flex: 40%;
	@media (max-width: 600px) {
		order: 1;
		flex: 100%;
	}
`;
const NoItems = styled.div`
	height: 100%;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	text-align: center;
	align-items: center;
`;
const RouteLink = styled(Link)`
	text-decoration: none;
	color: inherit;
	margin-top: 20px;
`;


//components
const CheckoutView = () => {
	const cartItems = useSelector((state) => state.app.cart.items);

	return (
		<Page>
			<Layout>
				<LeftPanel>
					{cartItems.length === 0 ? (
						<NoItems>
							<span>You have no items to check out.</span>
							<RouteLink to="/store">
									<SiteButton pop_up>VisitStore</SiteButton>
							</RouteLink>
						</NoItems>
					) : (
						<CustomerForm />
					)}
				</LeftPanel>
				<RightPanel>
					<CartSummary />
				</RightPanel>
			</Layout>
		</Page>
	);
};

export default CheckoutView;
