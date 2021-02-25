//

import React from "react";
import styled from "styled-components";

//components
import CartSummary from "./cart-summary";
import CustomerForm from "./customer-form";

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

//components
const CheckoutView = () => {
	return (
		<Page>
			<Layout>
				<LeftPanel>
					<CustomerForm />
				</LeftPanel>
				<RightPanel>
					<CartSummary />
				</RightPanel>
			</Layout>
		</Page>
	);
};

export default CheckoutView;
