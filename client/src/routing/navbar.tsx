//

import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.nav`
	background-color: ${(props) => props.theme.primary};
`;

//nav
function NavBar() {
	return (
		<Wrapper>
			<Link to="/">Home</Link> {""}
			<Link to="/store">Store</Link> {/** -> item views */}
			<Link to="/cart">Cart</Link> {/** -> checkout */}
		</Wrapper>
	);
}

export default NavBar;
