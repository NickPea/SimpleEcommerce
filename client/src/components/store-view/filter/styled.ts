//

import styled from 'styled-components';

//rui
import SiteButton from "../../resusable-ui/button-rui";

//styled components
export const Wrapper = styled.div``;

export const Padding = styled.div`
	padding: 5%;
`;
export const Background = styled.div`
	background-color: whitesmoke;
	border-radius: ${(p) => p.theme.borderradius_light};
`;
export const TextPosition = styled.div`
	display: flex;
	flex-flow: column nowrap;
`;
export const Title = styled.div`
	padding: 5%;
	font-size: 1.1rem;
	font-weight: bolder;
`;
export const LineSpacer = styled.div`
	border-bottom: 1px solid grey;
	width: 90%;
	margin: 0 auto;
`;
export const OptionsList = styled.div`
	padding: 5% 0;

	display: flex;
	flex-flow: column nowrap;
	align-items: center;
`;
export const Option = styled.div`
	padding: 10px;
	text-transform: capitalize;
	font-size: 0.9rem;
	font-weight: lighter;
	color: ${(p) => p.theme.smoothblack};
	border-radius: ${(p) => p.theme.borderradius_light};
	cursor: pointer;
	&:hover {
		box-shadow: ${(p) => p.theme.boxshadow_light_pop};
		font-weight: bolder;
	}
	&:active {
		box-shadow: ${(p) => p.theme.boxshadow_light_press};
		transform: translateY(1px);
	}
`;

//on mobile
export const OnMobileFixAndAnimateFilter = styled.div<{show: boolean}>`
	@media (max-width: 600px) {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		transition: transform 150ms;
		transform: ${(p) => (p.show ? "translateX(0)" : "translateX(100vw)")};
	}
`;

export const OnMobileOpenFilterButton = styled.div`
	display: none;
	@media (max-width: 600px) {
		display: block;
	}
`;
export const OpenButtonPosition = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-end;
	padding: 10px;
`;
export const OpenButton = styled(SiteButton)`
	padding: 10px;
	border-radius: ${(p) => p.theme.borderradius_light};
	&:hover {
		box-shadow: ${(p) => p.theme.boxshadow_light_pop};
	}
	&:active {
		box-shadow: ${(p) => p.theme.boxshadow_light_press};
	}
`;

export const OnMobileCloseFilterButton = styled.div`
	display: none;
	@media (max-width: 600px) {
		display: block;
	}
`;
export const CloseButtonPosition = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	margin: 7%;
`;
export const CloseButton = styled.div`
	padding: 10px;
	border-radius: ${(p) => p.theme.borderradius_light};
	&:hover {
		box-shadow: ${(p) => p.theme.boxshadow_light_pop};
	}
	&:active {
		box-shadow: ${(p) => p.theme.boxshadow_light_press};
	}
`;