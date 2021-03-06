//

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import SiteButton from "../../../resusable-ui/button-rui";
import IconSizer from "../../../resusable-ui/icon-sizer-rui";

//styles
const Wrapper = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	user-select: none;
	text-align: center;
`;

const Minus = styled.div``;
const CurrentCount = styled.div`
	height: 40px;
	width: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Plus = styled.div``;

//types
interface Proptypes {
	quantity: number;
	productId: number;
}

//component
const Counter = (props: Proptypes) => {
	const dispatch = useDispatch();

	const handleClickQuantityChange = (changeBy: number) => {
		if (props.quantity + changeBy < 1) {
			return;
		}
		dispatch({
			type: "APP/CART/ITEM/QUANTITY/UPDATE/START",
			payload: {
				productId: props.productId,
				quantity: props.quantity + changeBy,
			},
		});
	};

	return (
		<Wrapper>
			<Minus onClick={() => handleClickQuantityChange(-1)}>
				<SiteButton pop_up>
					<IconSizer h="20px" w="20px">
						-
					</IconSizer>
				</SiteButton>
			</Minus>
			<CurrentCount>{props.quantity}</CurrentCount>
			<Plus onClick={() => handleClickQuantityChange(+1)}>
				<SiteButton pop_up>
					<IconSizer h="20px" w="20px">
						+
					</IconSizer>
				</SiteButton>
			</Plus>
		</Wrapper>
	);
};

export default Counter;
