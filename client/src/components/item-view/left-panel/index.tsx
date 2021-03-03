//

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	border-right: 1px solid lightgrey;
	@media (max-width: 600px) {
		border-right: none;
	}
`;
const Padding = styled.div`
	padding: 5%;
`;
const ImagePoster = styled.img`
	width: 100%;
	object-fit: contain;
`;

interface PropTypes {
	imageURL: string;
}

function ItemDisplay({ imageURL }: PropTypes) {
	return (
		<Wrapper>
			<Padding>
				<ImagePoster src={imageURL} />
			</Padding>
		</Wrapper>
	);
}

export default ItemDisplay;
