//

import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//site logo
import SiteLogo from "../../../resources/icons/site-logo-svg";

const Wrapper = styled.div`
	background: linear-gradient(whitesmoke, white);
	color: ${(p) => p.theme.smoothblack};
	padding: 5% 8% 20% 8%;
`;
const LogoWrapper = styled.div`
	width: 50px;
`;
const Title = styled.div`
	margin: 5% 0;
	font-size: 1.2rem;
`;
const Text = styled.div`
	font-size: 0.8rem;
	font-weight: lighter;
	margin-bottom: 2%;
`;
const TextAlignCenter = styled(Text)`
	text-align: center;
`;
const RouteLink = styled(Link)`
	color: inherit;
`;
const HardLink = styled.a`
	color: inherit;
`;

const Copyright = () => {
	return (
		<div className="row">
			<div className="xs-col-12 sm-col-12">
				<TextAlignCenter>
					Copyright {new Date().getFullYear()}, Simple Cycles
				</TextAlignCenter>
			</div>
		</div>
	);
};

const Footer = () => {
	return (
		<Fragment>
			<Wrapper>
				<div className="row">
					<div className="xs-col-12 sm-col-12 md-col-3">
						<LogoWrapper>
							<SiteLogo />
						</LogoWrapper>
					</div>
					<div className="xs-col-12 sm-col-12 md-col-3">
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
					<div className="xs-col-12 sm-col-12 md-col-3">
						<Title>Contact</Title>
						<Text>
							Phone: &nbsp;
							<HardLink href="tel:61+123 456 789">+61 123 456 789</HardLink>
						</Text>
						<Text>
							Email: &nbsp;
							<HardLink href="mailto:enquiries@simplecommerce.com.au">
								enquiries@simplecycles.com.au
							</HardLink>
						</Text>
					</div>
				</div>
			</Wrapper>
			<Copyright />
		</Fragment>
	);
};

export default Footer;
