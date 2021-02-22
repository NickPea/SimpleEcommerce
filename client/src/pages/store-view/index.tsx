//

import React from "react";
import styled from "styled-components";
import Filter from "./filter";

const Page = styled.div``;
const LayoutWrapper = styled.div`
	display: flex;
	flex-flow: row nowrap;
`;
const LeftPanel = styled.div`
	flex: 30%;
	/* hide left panel on mobiles */
	@media (max-width: 600px) {
		display: none;
	}
`;
const RightPanel = styled.div`
	flex: 70%;
	@media (max-width: 600px) {
		flex: 100%;
	}
`;
const StoreView = () => {
	return (
		<Page>
			<LeftPanel>
				<Filter />
			</LeftPanel>
			<RightPanel>helo</RightPanel>
		</Page>
	);
};

export default StoreView;
