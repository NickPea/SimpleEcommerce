//

import React, { Fragment } from "react";
import styled from 'styled-components'

//components
import HeroSection from "./hero-section";
import FeaturedSection from "./featured-section";
import MovieOverlaySection from "./video-overlay-section";
import Assurances from "./assurances";
import Footer from "../../layout/footer";

const Page = styled.div``;

const LandingView = () => {
	return (
		<Page>
			<HeroSection />
			<FeaturedSection />
			<MovieOverlaySection />
			<Assurances />
			<Footer />
		</Page>
	);
};

export default LandingView;
