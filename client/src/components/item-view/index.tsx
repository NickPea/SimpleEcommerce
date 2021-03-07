//

import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";

//components
import BackButton from "./back-button";
import LeftPanel from "./left-panel";
import RightPanel from "./right-panel";

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
	const match = useRouteMatch();
	const dispatch = useDispatch();

	/**scroll to top on render */
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	/**match route param */
	const productName = match.params.slug;

	/**trigger state load */
	useEffect(() => {
		dispatch({ type: "DATA/ITEM-PAGE/PRODUCT/FETCH", payload: productName });
	}, [productName]);

	/**fetch state */
	const product = useSelector((state) => state.data.item_page.product);

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
