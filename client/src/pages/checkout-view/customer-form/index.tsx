import React, { useState } from "react";
import styled from "styled-components";

//resources
import SiteLogoSVG from "../../../resources/icons/site-logo-svg";

//components
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "../../../resusable-ui/button-rui";

const Wrapper = styled.div`
	border-right: 1px solid lightgrey;
`;
const Padding = styled.div`
	padding: 5%;
`;
const FinishMessageWrapper = styled.div`
	margin: 50px 0;
`;
const FinishText = styled.div`
	font-size: 1.4rem;
	font-style: italic;
	text-align: center;
`;
const BrandWrapper = styled.div`
	margin-right: auto;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	@media (max-width: 600px) {
		margin-right: 0;
		flex: 100%;
	}
`;
const LogoWrapper = styled.div`
	width: 50px;
`;
const SiteTitle = styled.div`
	margin-left: 5px;
`;
const SubtleText = styled.div`
	padding: 20px;
	color: grey;
	font-size: 0.9rem;
	font-weight: bolder;
`;
const FormWrapper = styled.div<{ padding?: string }>`
	background-color: whitesmoke;
	border-radius: ${(p) => p.theme.borderradius_light};

	padding: ${(p) => p.padding || "20px"};
	@media (max-width: 600px) {
		/* padding: 0px; */
	}
`;
const FormSectionTitle = styled.div`
	font-size: 0.9rem;
	padding: 10px;
	@media (max-width: 600px) {
		padding: 10px 0px;
	}
`;
const FormRow = styled.div<{ padding?: string }>`
	display: flex;
	flex-flow: row wrap;

	padding: ${(p) => p.padding || "10px 0"};
	@media (max-width: 600px) {
		padding: 0px;
	}
`;
const FormCol = styled.div<{ flex?: string; padding?: string; ml?: string }>`
	flex: ${(p) => p.flex};
	padding: ${(p) => p.padding || "0 5px"};
	margin-left: ${(p) => p.ml};
	@media (max-width: 600px) {
		flex: 100%;
		padding: 10px 0;
	}
`;
const StyledTextField = styled(TextField)`
	background-color: white;
`;
const StyledSelect = styled(Select)`
	background-color: white;
`;
const FinalizeButton = styled(Button)`
	margin: 20px 5px 0 0;
	padding: 20px;

	font-size: 1.3rem;
	border-radius: 0px;

	background-color: ${(p) => p.theme.smoothblack};
	color: white;

	&:hover {
		background-color: white;
		color: ${(p) => p.theme.smoothblack};
	}
`;

interface PropTypes {}

function CustomerInformationForm({}: PropTypes) {
	const [_formState, set_formState] = useState("");
	function handle_formState(event) {
		set_formState(event.target.value);
	}

	return (
		<Wrapper>
			<Padding>
				<FinishMessageWrapper>
					<FinishText>Thanks for shopping at</FinishText>
					<BrandWrapper>
						<LogoWrapper>
							<SiteLogoSVG />
						</LogoWrapper>
						<SiteTitle>Simple - Cycles</SiteTitle>
					</BrandWrapper>
				</FinishMessageWrapper>
				<SubtleText>Lets complete your order...</SubtleText>
				{/* form */}
				<FormWrapper>
					<FormSectionTitle>Contact Information.</FormSectionTitle>
					<FormRow>
						<FormCol flex="60%">
							<StyledTextField variant="outlined" label="Email" fullWidth />
						</FormCol>
						<FormCol flex="40%">
							<StyledTextField
								variant="outlined"
								label="Phone Number"
								fullWidth
							/>
						</FormCol>
					</FormRow>
					<FormSectionTitle>Shipping Address.</FormSectionTitle>
					<FormRow>
						<FormCol flex="50%">
							<StyledTextField
								variant="outlined"
								label="First Name"
								fullWidth
							/>
						</FormCol>
						<FormCol flex="50%">
							<StyledTextField variant="outlined" label="Last Name" fullWidth />
						</FormCol>
					</FormRow>
					<FormRow>
						<FormCol flex="100%">
							<StyledTextField variant="outlined" label="Address" fullWidth />
						</FormCol>
					</FormRow>
					<FormRow>
						<FormCol flex="100%">
							<StyledTextField variant="outlined" label="Suburb" fullWidth />
						</FormCol>
					</FormRow>
					<FormRow>
						<FormCol flex="33%">
							<StyledTextField
								select
								variant="outlined"
								label="Country"
								fullWidth
								value="AUST"
							>
								<MenuItem value={"AUST"}>Australia</MenuItem>
							</StyledTextField>
						</FormCol>
						<FormCol flex="33%">
							<StyledTextField
								select
								variant="outlined"
								label="State"
								value={_formState}
								onChange={handle_formState}
								fullWidth
							>
								<MenuItem value={"qld"}>Queensland</MenuItem>
								<MenuItem value={"nsw"}>New South Wales</MenuItem>
								<MenuItem value={"nt"}>Northern Territory</MenuItem>
								<MenuItem value={"wa"}>Western Australia</MenuItem>
								<MenuItem value={"vic"}>Victoria</MenuItem>
								<MenuItem value={"sa"}>South Australia</MenuItem>
								<MenuItem value={"act"}>Australian Capital Territory</MenuItem>
							</StyledTextField>
						</FormCol>
						<FormCol flex="33%">
							<StyledTextField variant="outlined" label="Postcode" fullWidth />
						</FormCol>
					</FormRow>
					<FormRow>
						<FormCol ml="auto">
							<FinalizeButton>Proceed to Payment</FinalizeButton>
						</FormCol>
					</FormRow>
				</FormWrapper>
				{/* //form */}
			</Padding>
		</Wrapper>
	);
}

export default CustomerInformationForm;
