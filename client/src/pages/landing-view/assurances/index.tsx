//

import React from "react";
import styled from "styled-components";
import { Testing, Quality, Performance } from "../../../resources/icons/svgs";

const Wrapper = styled.div`
	padding: 5%;
`;

const Assurance = styled.div`
	padding: 10%;
`;

const SVG = styled.div`
	height: 50px;
	width: 50px;
	margin-left: auto;
`;

const LineBreak = styled.div`
	border-top: 1px solid lightgrey;
	margin: 5% 0;
`;

const Title = styled.div`
	margin: 3% 0;
	font-size: 1rem;
	font-weight: bolder;
	@media (min-width: 800px) {
		font-size: 1.2rem;
	}
`;

const Explanation = styled.div`
	margin: 3% 0;
	font-size: 0.8rem;
	font-weight: lighter;
	@media (min-width: 800px) {
		font-size: 1rem;
	}
`;

const LearnMore = () => {
	return (
		<div id="learnmore">
			<Wrapper>
				<div className="row">
					<div className="xs-col-12 sm-col-12 md-col-4">
						<Assurance>
							<SVG>
								<Testing />
							</SVG>
							<LineBreak />
							<Title>Strict Testing</Title>
							<Explanation>
								Each of our manufactured products undergoes a comprehensive
								testing process after the design, and before being shipped to
								the consumer.
							</Explanation>
						</Assurance>
					</div>
					<div className="xs-col-12 sm-col-12 md-col-4">
						<Assurance>
							<SVG>
								<Quality />
							</SVG>
							<LineBreak />
							<Title>Quality Assurance</Title>
							<Explanation>
								All material used in production adhere to safe sourcing
								practices as regulated by parlimentary guidelines
							</Explanation>
						</Assurance>
					</div>
					<div className="xs-col-12 sm-col-12 md-col-4">
						<Assurance>
							<SVG>
								<Performance />
							</SVG>
							<LineBreak />
							<Title>Performance Gain</Title>
							<Explanation>
								Not only do we employ safe practices, our parts and finished
								bikes are design to be light, strong, and optimal in size to allow
								you a smoother ride.
							</Explanation>
						</Assurance>
					</div>
				</div>
			</Wrapper>
		</div>
	);
};

export default LearnMore;
