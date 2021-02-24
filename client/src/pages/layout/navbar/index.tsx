//

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//resources
import CartSVG from "../../../resources/icons/cart-svg";
import SiteLogo from "../../../resources/icons/site-logo-svg";

const Bar = styled.nav`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: flex-end;

	padding: 15px;
	border-bottom: 1px solid lightgrey;

	@media (max-width: 600px) {
		justify-content: center;
	}
`;

const RouteLink = styled(Link)`
	text-decoration: none;
	color: ${(p) => p.theme.smoothblack};
`;
const FakeRouteLink = styled.div`
	color: ${(p) => p.theme.smoothblack};
`;

const BrandWrapper = styled.div`
	margin-right: auto;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	@media (max-width: 600px) {
		margin-right: 0;
		flex: 100%;
	}
`;

const LogoWrapper = styled.div`
	width: 50px;
`;
const SiteTitle = styled.div`
	margin-left: 5px;
`;

const NavButton = styled.div`
	margin: 0 5px;

	/* for hover effect */
	padding: 10px;
	border-radius: ${(p) => p.theme.borderradius_light};
	&:hover {
		box-shadow: ${(p) => p.theme.boxshadow_light_pop};
		font-weight: bolder;
		transform: translateY(1px);
	}
	&:active {
		box-shadow: ${(p) => p.theme.boxshadow_light_press};
	}
`;

//nav
function NavBar() {
	return (
		<Bar>
			<BrandWrapper>
				<LogoWrapper>
					<SiteLogo />
				</LogoWrapper>
				<SiteTitle>Simple - Cycles</SiteTitle>
			</BrandWrapper>

			<RouteLink to="/">
				<NavButton>Home</NavButton>
			</RouteLink>

			<RouteLink to="/store">
				<NavButton>Store</NavButton>
			</RouteLink>
			{/** -> item views */}

			<RouteLink to="/item">
				<NavButton>Item</NavButton>
			</RouteLink>

			{/* opens cart */}
			<FakeRouteLink>
				<NavButton>
					<CartSVG />
				</NavButton>
			</FakeRouteLink>
			{/** -> checkout */}
		</Bar>
	);
}

export default NavBar;
