//

import React, { useState } from "react";
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

const Minus = styled.div`
`;
const CurrentCount = styled.div`
	height: 40px;
	width: 40px;
	display:flex;
	justify-content: center;
	align-items: center;
`;
const Plus = styled.div`
`;

//types
interface Proptypes {
	start: number;
}

//component
const Counter = ({ start }: Proptypes) => {
	let [_counter, set_counter] = useState(start);

	//validate count
	const set_counter_NoLessThanOne = (newCount) => {
		if (newCount < 1) {
			return;
		} else {
			set_counter(newCount);
		}
	};

	return (
		<Wrapper>
			<Minus
				onClick={() => {
					set_counter_NoLessThanOne(_counter - 1);
				}}
			>
				<SiteButton pop_up>
					<IconSizer h="20px" w="20px">
						-
					</IconSizer>
				</SiteButton>
			</Minus>
			<CurrentCount>{_counter}</CurrentCount>
			<Plus
				onClick={() => {
					set_counter_NoLessThanOne(_counter + 1);
				}}
			>
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
