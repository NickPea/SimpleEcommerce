//

import React from "react";
import styled from "styled-components";
import Filter from "./filter";

const Page = styled.div``;

const StoreView = () => {
	return (
		<Page>
			<div className="row">
				<div className="xs-col-12 sm-col-12 md-col-4">
					<Filter/>
				</div>
				<div className="xs-col-12 sm-col-12 md-col-8">hello</div>
			</div>
		</Page>
	);
};

export default StoreView;
