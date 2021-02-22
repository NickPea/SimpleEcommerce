//

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartSVG from "../../resources/icons/cart-svg";

const Bar = styled.nav`
	display: flex;
	flex-flow: row, nowrap;
	align-items: center;
	justify-content: flex-end;

	padding: 15px;
	border-bottom: 1px solid lightgrey;

	@media (max-width: 600px) {
		justify-content: center;
	}
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

const RouteLink = styled(Link)`
	text-decoration: none;
	color: ${p=>p.theme.smoothblack};
`;

//nav
function NavBar() {
	return (
		<Bar>
			<RouteLink to="/">
				<NavButton>Home</NavButton>
			</RouteLink>{" "}
			{""}
			<RouteLink to="/store">
				<NavButton>Store</NavButton>
			</RouteLink>{" "}
			{/** -> item views */}
			<RouteLink to="/cart">
				<NavButton>
					<CartSVG />
				</NavButton>
			</RouteLink>{" "}
			{/** -> checkout */}
		</Bar>
	);
}

export default NavBar;
