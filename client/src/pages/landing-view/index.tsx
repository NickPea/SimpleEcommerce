//

import React from "react";

//components
import HeroSection from "./hero-section";
import FeaturedSection from "./featured-section";
import MovieOverlaySection from "./video-overlay-section";
import Assurances from "./assurances";
import Footer from "../../layout/footer";

const LandingView = () => {
	return (
		<div>
			<HeroSection />
			<FeaturedSection />
			<MovieOverlaySection />
			<Assurances />
			<Footer />
		</div>
	);
};

export default LandingView;
