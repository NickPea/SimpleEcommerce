//

import React from "react";
import styled from "styled-components";

const LineSpacer = styled.div`
	margin: ${(p) => p.margin || "0px"};
	width: ${(p) => p.width || "100%"};
	border-bottom: 1px solid lightgrey;
`;

export default LineSpacer;
