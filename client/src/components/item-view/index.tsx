//

import React, { useEffect } from "react";
import styled from "styled-components";
import { useRouteMatch } from "react-router-dom";

//components
import BackButton from "./back-button";
import LeftPanel from "./left-panel";
import RightPanel from "./right-panel";

//fake data
import { singleStoreProduct } from "../../fake-product-data";
import { useDispatch, useSelector } from "react-redux";
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
	@media (min-width: 769px) {
		width: ${(p: { x: string }) => p.x};
		margin: 0 auto;
	}
`;

//component
const ItemView = () => {
	/**
	 * on component render match the route :slug
	 * dispach an action to sagas to fetch data and update state
	 * then update component with new selected product state
	 * scroll to top on render
	 */
	const match = useRouteMatch();
	const productName = match.params.slug;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({ type: "DATA/ITEM-PAGE/PRODUCT/FETCH", payload: productName });
	}, [productName]);
	const product = useSelector((state) => state.data.item_page.product);

	/**scroll to top on render */
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Page>
			<BackButtonPosition>
				<BackButton />
			</BackButtonPosition>
			<OnDesktopNarrowTo x="80%">
				<div className="row">
					<div className="xs-col-12 sm-col-12 md-col-6">
						<LeftPanel />
					</div>
					<div className="xs-col-12 sm-col-12 md-col-6">
						<RightPanel />
					</div>
				</div>
			</OnDesktopNarrowTo>
		</Page>
	);
};

export default ItemView;
