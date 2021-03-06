//

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//resources
import HamburgerSVG from "../../../resources/icons/hamburger-svg";
import CloseSVG from "../../../resources/icons/close-svg";

//re-usable
import IconSizerRUI from "../../resusable-ui/icon-sizer-rui";

//styled components
import {
	Wrapper,
	OnMobileOpenFilterButton,
	OpenButtonPosition,
	OpenButton,
	OnMobileFixAndAnimateFilter,
	Padding,
	Background,
	OnMobileCloseFilterButton,
	CloseButtonPosition,
	CloseButton,
	TextPosition,
	Title,
	LineSpacer,
	OptionsList,
	Option,
} from "./styled";

const Filter = () => {
	const [_isMobileFilterShown, set_isMobileFilterShown] = useState(false);

	const categories = useSelector((state) => state.data.store_page.categories);
	const dispatch = useDispatch();
	const handleClickCategory = (category_name: string) => {
		dispatch({
			type: "DATA/STORE-PAGE/DISPLAY/CATEGORY-FETCH",
			payload: category_name,
		});
	};
	const handleClickPrice = (priceCode: string) => {
		dispatch({
			type: "DATA/STORE-PAGE/DISPLAY/PRICE-FETCH",
			payload: priceCode,
		});
	};

	return (
		<Wrapper>
			<OnMobileOpenFilterButton>
				<OpenButtonPosition>
					<OpenButton pop_up onClick={() => set_isMobileFilterShown(true)}>
						<IconSizerRUI h="30px" w="30px">
							<HamburgerSVG />
						</IconSizerRUI>
					</OpenButton>
				</OpenButtonPosition>
			</OnMobileOpenFilterButton>
			<OnMobileFixAndAnimateFilter show={_isMobileFilterShown}>
				<Padding>
					<Background>
						<OnMobileCloseFilterButton>
							<CloseButtonPosition>
								<CloseButton onClick={() => set_isMobileFilterShown(false)}>
									<IconSizerRUI h="20px" w="20px">
										<CloseSVG />
									</IconSizerRUI>
								</CloseButton>
							</CloseButtonPosition>
						</OnMobileCloseFilterButton>
						<TextPosition>
							<Title>Category</Title>
							<LineSpacer />
							<OptionsList>
								{categories.map((category: { id: number; name: string }) => {
									return (
										<Option
											onClick={() => handleClickCategory(category.name)}
											key={category.id}
										>
											{category.name}
										</Option>
									);
								})}
							</OptionsList>
							<Title>Price</Title>
							<LineSpacer />
							<OptionsList>
								<Option onClick={()=> handleClickPrice('greaterthan5000')}>More than $5000</Option>
								<Option onClick={()=> handleClickPrice('between1500and5000')}>$1500 to $5000</Option>
								<Option onClick={()=> handleClickPrice('lessthan1500')}>Less than $1500</Option>
							</OptionsList>
						</TextPosition>
					</Background>
				</Padding>
			</OnMobileFixAndAnimateFilter>
		</Wrapper>
	);
};

export default Filter;
