//

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

//resources
import backgroundImageUrl from "./background-image.jpg";

const Wrapper = styled.div``;
const Background = styled.div`
	height: 100vh;

	background: url(${backgroundImageUrl}) no-repeat;
	background-attachment: fixed; /** parallax */
	background-size: cover;
	background-position: center;
`;
const PanelContainer = styled.div`
	height: 100%;

	display: flex;
	flex-flow: row wrap;
`;
const LeftPanel = styled.div`
	height: 100%;
	flex: 70%;

	@media (max-width: 600px) {
		flex: 100%;
	}

	background-color: ${(p) => p.theme.backgroundcolor_transparent};
	border-radius: ${(p) => p.theme.borderradius_light};

	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
`;
const RightPanel = styled.div`
	flex: 30%;
	height: 100%;

	@media (max-width: 600px) {
		flex: 100%;
	}

	/*  */
`;
const HeroTitle = styled.div`
	padding: 0 20%;
	text-align: center;
	font-size: 5rem;
	color: white;

	@media (max-width: 768px) {
		font-size: 4rem;
		padding: 0 5%;
	}
	@media (max-width: 600px) {
		font-size: 3rem;
	}
`;
const RouteLink = styled(Link)`
	text-decoration: none;
`;
const CatalogButton = styled.div`
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
		<Wrapper>
			<Background>
				<PanelContainer>
					<LeftPanel>
						<HeroTitle>
							<Fade>Get the most out of your Ride.</Fade>
						</HeroTitle>
						<RouteLink to="/store">
							<CatalogButton>Full Catalog</CatalogButton>
						</RouteLink>
					</LeftPanel>
					<RightPanel>
						{' '}
					</RightPanel>
				</PanelContainer>
			</Background>
		</Wrapper>
	);
};

export default HeroSection;
