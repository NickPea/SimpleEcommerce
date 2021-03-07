//

import React from "react";
import { useSelector } from "react-redux";
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

interface PropTypes {}

function ItemDisplay() {
	const product = useSelector((state) => state.data.item_page.product);

	return (
		<Wrapper>
			<Padding>
				<ImagePoster src={product.image_url} />
			</Padding>
		</Wrapper>
	);
}

export default ItemDisplay;
