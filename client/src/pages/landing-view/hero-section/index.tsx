//

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {Fade} from 'react-reveal';
//
import backgroundImageUrl from "./background-image.jpg";

const Background = styled.div`
	background: url(${backgroundImageUrl}) no-repeat;
	background-attachment: fixed; /** parallax */
	background-size: cover;
	background-position: center;
`;

const LeftPanelFlex = styled.div`
	margin: 10px;
	padding: 20px;

	display: flex;
	flex-flow: column nowrap;

	background-color: ${(p) => p.theme.backgroundcolor_transparent};
	border-radius: ${(p) => p.theme.borderradius_light};
`;

const HeroTitle = styled.div`
	font-size: 5rem;
	color: white;
	@media (max-width: 768px) {
		font-size: 3rem;
	}
	@media (max-width: 600px) {
		font-size: 2rem;
		text-align: center;
	}
`;

const RouteLink = styled(Link)`
	text-decoration: none;
	align-self: flex-end;
`;

const CatalougeButton = styled.div`
	margin-top: 20px;
	padding: 20px;
	border: 1px solid white;
	border-radius: ${(p) => p.theme.borderradius_light};
	background-color: ${(p) => p.theme.smoothblack};
	color: white;
	font-size: 1.3rem;
	@media (max-width: 768px) {
		font-size: 1rem;
		padding: 15px;
	}
	@media (max-width: 600px) {
		/* align-self: center; */
		font-size: 0.8rem;
		padding: 15px;
	}
	transition: background-color 500ms;
	&:hover {
		background-color: rgba(255, 255, 255);
		color: ${(p) => p.theme.smoothblack};
		box-shadow: ${(p) => p.theme.boxshadow_light_pop};
		font-weight: bolder;
		text-decoration: underline;
		transform: translateY(1px);
	}
	cursor: pointer;
`;

const HeroSection = () => {
	return (
		<Background>
			<div className="row">
				<div className="xs-col-12 md-col-6">
					<LeftPanelFlex>
						<HeroTitle>
							<Fade>Get the most out of your Ride.</Fade>
						</HeroTitle>
						<RouteLink to="/store">
							<CatalougeButton>Catalouge</CatalougeButton>
						</RouteLink>
					</LeftPanelFlex>
				</div>
				<div className="xs-col-12 md-col-6">
					<div></div>
				</div>
			</div>
		</Background>
	);
};

export default HeroSection;
