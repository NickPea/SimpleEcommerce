//

import React from "react";
import styled from "styled-components";

//components
import BackButton from "./back-button";
import LeftPanel from "./left-panel";
import RightPanel from "./right-panel";

//fake data
import { singleStoreProduct } from "../../fake-product-data";
const { imgUrl, title, price, description } = singleStoreProduct();

//styles
const Page = styled.div``;
const BackButtonPosition = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	padding: 10px;
`;
const OnDesktopNarrowTo = styled.div`
	@media(min-width: 769px) {
		width: ${ (p: {x: string}) => p.x};
		margin: 0 auto;
	}
`;

//component
const ItemView = () => {
	return (
		<Page>
			<BackButtonPosition>
				<BackButton />
			</BackButtonPosition>
			<OnDesktopNarrowTo x="80%">
				<div className="row">
					<div className="xs-col-12 sm-col-12 md-col-6">
						<LeftPanel imageURL={imgUrl} />
					</div>
					<div className="xs-col-12 sm-col-12 md-col-6">
						<RightPanel title={title} price={price} description={description} />
					</div>
				</div>
			</OnDesktopNarrowTo>
		</Page>
	);
};

export default ItemView;
