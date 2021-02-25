//

import React from "react";
import styled from "styled-components";

const SiteButton = styled.div`
	cursor: pointer;
	user-select: none;
	text-align: center;

	padding: 10px;
	border-radius: 5px;

	color: ${p=>p.color || 'black'};
	background-color: ${p=>p.bg || 'white'};

	${(props) => {
		if (props.pop_up) {
			return `
				box-shadow: 0 1px 5px grey;
				font-weight: bolder;
				transform: translateY(1px);
			`;
		}
	}}

	&:hover {
		box-shadow: 0 1px 5px grey;
		font-weight: bolder;
		transform: translateY(1px);
	}
	&:active {
		box-shadow: 0 1px 5px grey inset;
	}
`;

export default SiteButton;
