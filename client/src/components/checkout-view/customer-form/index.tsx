import React, { useState } from "react";
import styled from "styled-components";
import joi from "joi";
import { useDispatch } from "react-redux";

//resources
import SiteLogoSVG from "../../../resources/icons/site-logo-svg";

//components
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "../../resusable-ui/button-rui";

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
const Errors = styled.div`
	color: red;
`;

interface PropTypes {}

function CustomerInformationForm({}: PropTypes) {
	const dispatch = useDispatch();

	//form state & validation
	const [_validationErrors, set_validationErrors] = useState({});

	const [_email, set_email] = useState("");
	const [_phoneNumber, set_phoneNumber] = useState("");
	const [_firstName, set_firstName] = useState("");
	const [_lastName, set_lastName] = useState("");
	const [_address, set_address] = useState("");
	const [_suburb, set_suburb] = useState("");
	const [_country, set_country] = useState("");
	const [_province, set_province] = useState("");
	const [_postcode, set_postcode] = useState("");

	const handleChangeEmail = (e) => set_email(e.target.value);
	const handleChangePhoneNumber = (e) => set_phoneNumber(e.target.value);
	const handleChangeFirstName = (e) => set_firstName(e.target.value);
	const handleChangeLastName = (e) => set_lastName(e.target.value);
	const handleChangeAddress = (e) => set_address(e.target.value);
	const handleChangeSuburb = (e) => set_suburb(e.target.value);
	const handleChangeCountry = (e) => set_country(e.target.value);
	const handleChangeProvince = (e) => set_province(e.target.value);
	const handleChangePostcode = (e) => set_postcode(e.target.value);

	const emailValidation = joi
		.string()
		.email({ tlds: { allow: false } })
		.required()
		.label("email");
	const phoneNumberValidation = joi
		.number()
		.integer()
		.required()
		.label("phone number");
	const firstNameValidation = joi.string().required().label("first name");
	const lastNameValidation = joi.string().required().label("last name");
	const addressValidation = joi.string().alphanum().required().label("address");
	const suburbValidation = joi.string().required().label("suburb");
	const countryValidation = joi.string().required().label("country");
	const provinceValidation = joi.string().required().label("province");
	const postcodeValidation = joi.number().required().label("postcode");

	const handleBlurEmail = (e) => {
		const { value, error } = emailValidation.validate(e.target.value);
		error
			? set_validationErrors({ ..._validationErrors, email: error.message })
			: set_validationErrors({ ..._validationErrors, email: null });
	};
	const handleBlurPhoneNumber = (e) => {
		const { value, error } = phoneNumberValidation.validate(e.target.value);
		error
			? set_validationErrors({
					..._validationErrors,
					phoneNumber: error.message,
			  })
			: set_validationErrors({ ..._validationErrors, phoneNumber: null });
	};
	const handleBlurFirstName = (e) => {
		const { value, error } = firstNameValidation.validate(e.target.value);
		error
			? set_validationErrors({ ..._validationErrors, firstName: error.message })
			: set_validationErrors({ ..._validationErrors, firstName: null });
	};
	const handleBlurLastName = (e) => {
		const { value, error } = lastNameValidation.validate(e.target.value);
		error
			? set_validationErrors({ ..._validationErrors, lastName: error.message })
			: set_validationErrors({ ..._validationErrors, lastName: null });
	};
	const handleBlurAddress = (e) => {
		const { value, error } = addressValidation.validate(e.target.value);
		error
			? set_validationErrors({ ..._validationErrors, address: error.message })
			: set_validationErrors({ ..._validationErrors, address: null });
	};
	const handleBlurSuburb = (e) => {
		const { value, error } = suburbValidation.validate(e.target.value);
		error
			? set_validationErrors({ ..._validationErrors, suburb: error.message })
			: set_validationErrors({ ..._validationErrors, suburb: null });
	};
	const handleBlurCountry = (e) => {
		const { value, error } = countryValidation.validate(e.target.value);
		error
			? set_validationErrors({ ..._validationErrors, country: error.message })
			: set_validationErrors({ ..._validationErrors, country: null });
	};
	const handleBlurProvince = (e) => {
		const { value, error } = provinceValidation.validate(e.target.value);
		error
			? set_validationErrors({ ..._validationErrors, province: error.message })
			: set_validationErrors({ ..._validationErrors, province: null });
	};
	const handleBlurPostcode = (e) => {
		const { value, error } = postcodeValidation.validate(e.target.value);
		error
			? set_validationErrors({ ..._validationErrors, postcode: error.message })
			: set_validationErrors({ ..._validationErrors, postcode: null });
	};

	const formValidation = joi.object({
		email: joi
			.string()
			.email({ tlds: { allow: false } })
			.required()
			.label("email"),
		phoneNumber: joi.number().integer().required().label("phone number"),
		firstName: joi.string().required().label("first name"),
		lastName: joi.string().required().label("last name"),
		address: joi.string().alphanum().required().label("address"),
		suburb: joi.string().required().label("suburb"),
		country: joi.string().required().label("country"),
		province: joi.string().required().label("province"),
		postcode: joi.number().required().label("postcode"),
	});

	const handleOnSubmit = (e) => {
		const { value, error } = formValidation.validate({
			email: _email,
			phoneNumber: _phoneNumber,
			firstName: _firstName,
			lastName: _lastName,
			address: _address,
			suburb: _suburb,
			country: _country,
			province: _province,
			postcode: _postcode,
		});

		if (error) {
			error.details.forEach((err) => {
				set_validationErrors({
					..._validationErrors,
					[err.context.key]: err.message,
				});
			});
			dispatch({
				type: "APP/NOTIFICATIONS/ADD",
				payload: {
					message: "Please fill in the form correctly"
				}
			});
		} else {
			dispatch({
				type: "APP/NOTIFICATIONS/ADD",
				payload: {
					message: `CONGRATULATIONS ${value.firstName}. Enjoy your new bike!`
				}
			});
			//more clean up (loading cloak??) and redirection here!!
		}
	};

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
							<StyledTextField
								variant="outlined"
								label="Email"
								fullWidth
								value={_email}
								onChange={handleChangeEmail}
								onBlur={handleBlurEmail}
							/>
							<Errors>
								{_validationErrors.email && _validationErrors.email}
							</Errors>
						</FormCol>
						<FormCol flex="40%">
							<StyledTextField
								variant="outlined"
								label="Phone Number"
								fullWidth
								value={_phoneNumber}
								onChange={handleChangePhoneNumber}
								onBlur={handleBlurPhoneNumber}
							/>
							<Errors>
								{_validationErrors.phoneNumber && _validationErrors.phoneNumber}
							</Errors>
						</FormCol>
					</FormRow>
					<FormSectionTitle>Shipping Address.</FormSectionTitle>
					<FormRow>
						<FormCol flex="50%">
							<StyledTextField
								variant="outlined"
								label="First Name"
								fullWidth
								value={_firstName}
								onChange={handleChangeFirstName}
								onBlur={handleBlurFirstName}
							/>
							<Errors>
								{_validationErrors.firstName && _validationErrors.firstName}
							</Errors>
						</FormCol>
						<FormCol flex="50%">
							<StyledTextField
								variant="outlined"
								label="Last Name"
								fullWidth
								value={_lastName}
								onChange={handleChangeLastName}
								onBlur={handleBlurLastName}
							/>
							<Errors>
								{_validationErrors.lastName && _validationErrors.lastName}
							</Errors>
						</FormCol>
					</FormRow>
					<FormRow>
						<FormCol flex="100%">
							<StyledTextField
								variant="outlined"
								label="Address"
								fullWidth
								value={_address}
								onChange={handleChangeAddress}
								onBlur={handleBlurAddress}
							/>
							<Errors>
								{_validationErrors.address && _validationErrors.address}
							</Errors>
						</FormCol>
					</FormRow>
					<FormRow>
						<FormCol flex="100%">
							<StyledTextField
								variant="outlined"
								label="Suburb"
								fullWidth
								value={_suburb}
								onChange={handleChangeSuburb}
								onBlur={handleBlurSuburb}
							/>
							<Errors>
								{_validationErrors.suburb && _validationErrors.suburb}
							</Errors>
						</FormCol>
					</FormRow>
					<FormRow>
						<FormCol flex="33%">
							<StyledTextField
								select
								variant="outlined"
								label="Country"
								fullWidth
								value={_country}
								onChange={handleChangeCountry}
								onBlur={handleBlurCountry}
							>
								<MenuItem value={"AUST"}>Australia</MenuItem>
							</StyledTextField>
							<Errors>
								{_validationErrors.country && _validationErrors.country}
							</Errors>
						</FormCol>
						<FormCol flex="33%">
							<StyledTextField
								select
								variant="outlined"
								label="State"
								fullWidth
								value={_province}
								onChange={handleChangeProvince}
								onBlur={handleBlurProvince}
							>
								<MenuItem value={"qld"}>Queensland</MenuItem>
								<MenuItem value={"nsw"}>New South Wales</MenuItem>
								<MenuItem value={"nt"}>Northern Territory</MenuItem>
								<MenuItem value={"wa"}>Western Australia</MenuItem>
								<MenuItem value={"vic"}>Victoria</MenuItem>
								<MenuItem value={"sa"}>South Australia</MenuItem>
								<MenuItem value={"act"}>Australian Capital Territory</MenuItem>
							</StyledTextField>
							<Errors>
								{_validationErrors.province && _validationErrors.province}
							</Errors>
						</FormCol>
						<FormCol flex="33%">
							<StyledTextField
								variant="outlined"
								label="Postcode"
								fullWidth
								value={_postcode}
								onChange={handleChangePostcode}
								onBlur={handleBlurPostcode}
							/>
							<Errors>
								{_validationErrors.postcode && _validationErrors.postcode}
							</Errors>
						</FormCol>
					</FormRow>
					<FormRow>
						<FormCol ml="auto">
							<FinalizeButton tabIndex={0} onClick={handleOnSubmit}>
								Proceed to Payment
							</FinalizeButton>
						</FormCol>
					</FormRow>
				</FormWrapper>
				{/* //form */}
			</Padding>
		</Wrapper>
	);
}

export default CustomerInformationForm;
