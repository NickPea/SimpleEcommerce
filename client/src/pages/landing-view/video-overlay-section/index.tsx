//

import React from "react";
import styled from "styled-components";

//video
import ridingVideoUrl from "../../../resources/video/riding-video.mp4";

//NB: styled components has a bug with video tags that interferes with autopaly
const videoStyles = {
	width: "100%",
};
const OverlayWrapper = styled.div`
	position: relative;
`;
const VideoOverlay = styled.div`
	top: 0;
	left: 0;
	position: absolute;
	z-index: 9;
	height: 100%;
	width: 100%;
`;
const ContentPosition = styled.div`
	height: 100%;
	width: 70%;

	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
`;

const Text = styled.div`
	text-align: center;
	font-size: 2rem;
	background-color: white;
	border-radius: ${(p) => p.theme.borderradius_light};
	padding: 3%;

	@media (max-width: 768px) {
		font-size: 1rem;
	}
	@media (max-width: 600px) {
		font-size: 0.7rem;
	}
`;

const HardLink = styled.a`
	text-decoration: none;
`;

const Button = styled.div`
	margin-top: 20px;
	padding: 20px;
	border: 1px solid white;
	border-radius: ${(p) => p.theme.borderradius_light};
	background-color: ${(p) => p.theme.smoothblack};
	color: white;
	font-size: 1.3rem;
	@media (max-width: 768px) {
		font-size: 1rem;
	}
	@media (max-width: 600px) {
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
`; //

const MovieOverlaySection = () => {
	return (
		<OverlayWrapper>
			<video
				autoPlay
				loop
				muted
				src={ridingVideoUrl}
				style={videoStyles}
			></video>
			<VideoOverlay>
				<ContentPosition>
					<Text>
						Quality concerns? <br /> We've got you covered.
					</Text>
					<HardLink href="#learnmore">
						<Button>Learn More</Button>
					</HardLink>
				</ContentPosition>
			</VideoOverlay>
		</OverlayWrapper>
	);
};

export default MovieOverlaySection;
