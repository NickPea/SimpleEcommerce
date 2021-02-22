//

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//site logo
import SiteLogo from '../../resources/icons/site-logo';

const Wrapper = styled.div`
	background-color: lightgrey;
	color: ${(p) => p.theme.smoothblack};
	padding: 15%;
`;

const LogoWrapper = styled.div`
	width: 50px;
`;
const Title = styled.div`
	font-size: 1.2rem;
`;
const Text = styled.div`
	font-size: 0.8rem;
	font-weight: lighter;
`;
const RouteLink = styled(Link)`
	color: inherit;
`;
const HardLink = styled.a`
	color: inherit;
`;

const Footer = () => {
	return (
		<Wrapper>
			<div className="row">
				<div className="xs-col-12 sm-col-12 md-col-2">
					<LogoWrapper>
						<SiteLogo />
					</LogoWrapper>
				</div>
				<div className="xs-col-12 sm-col-12 md-col-2">
					<Title>Links</Title>
					<RouteLink to="/landing">
						<Text>Home</Text>
					</RouteLink>
					<RouteLink to="/store">
						<Text>Store</Text>
					</RouteLink>
					<RouteLink to="/cart">
						<Text>Cart</Text>
					</RouteLink>
				</div>
				<div className="xs-col-12 sm-col-12 md-col-2">
					<Title>Contact</Title>
					<Text>
						Phone: &nbsp;
						<HardLink href="tel:61+123 456 789">+61 123 456 789</HardLink>
					</Text>
					<Text>
						Email: &nbsp;
						<HardLink href="mailto:enquiries@simplecommerce.com.au">
							enquiries@simplecommerce.com.au
						</HardLink>
					</Text>
				</div>
			</div>
		</Wrapper>
	);
};

export default Footer;
