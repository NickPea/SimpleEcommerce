//

import React from "react";
import styled from "styled-components";

interface Proptypes {
	margin?: string;
	width?: string;
}

const LineSpacer = styled.div<Proptypes>`
	margin: ${(p) => p.margin || "0px"};
	width: ${(p) => p.width || "100%"};
	border-bottom: 1px solid lightgrey;
`;

export default LineSpacer;
