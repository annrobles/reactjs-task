import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";

const styles = (theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
	card: {
		maxWidth: 345,
	},
	formControl: {
		marginTop: theme.spacing.unit,
		minWidth: 120,
	},
	group: {
		margin: `${theme.spacing.unit}px 0`,
	},
});

const FormValidatorPage = (props) => {
	const { classes } = props;

	const [formData, setFormData] = useState({
		firstName: "",
		middleName: "",
		lastName: "",
		email: "",
		phone: "",
		age: "",
		postcode: "",
		description: "",
		tshirtSize: "",
		tshirtColor: "White",
		acceptCondition: false,
		labelWidth: 0,
	});

	const [errors, setErrors] = useState({});
	const InputLabelRef = useRef(null);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		let updatedValue = value;

		if (name === "phone") {
			const cleaned = updatedValue.replace(/\D/g, "");
			const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
			updatedValue = `(${match[1]}) ${match[2]}-${match[3]}`;
		} else if (name === "postcode") {
			const uppercaseValue = updatedValue.toUpperCase();
			const match = uppercaseValue.match(
				/^([A-Z]{0,1})(\d{0,1})([A-Z]{0,1})\s*(\d{0,1})([A-Z]{0,1})(\d{0,1})$/
			);
			updatedValue = `${match[1]}${match[2]}${match[3]} ${match[4]}${match[5]}${match[6]}`;
		}

		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));

		if (!value) {
			setErrors((prevErrors) => ({
				...prevErrors,
				[name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
			}));
		} else if (name === "description" && value.length < 150) {
			setErrors((prevErrors) => ({
				...prevErrors,
				description:
					"Description is required and should be at least 150 characters",
			}));
		} else if (name === "description" && value.length > 150) {
			setErrors((prevErrors) => ({
				...prevErrors,
				description: undefined,
			}));
		} else if ((name === "age" && value < 16) || value > 65) {
			setErrors((prevErrors) => ({
				...prevErrors,
				age: "Age is required and age must be between 16 and 65",
			}));
		} else if (name === "age" && value >= 16 && value <= 65) {
			setErrors((prevErrors) => ({
				...prevErrors,
				age: undefined,
			}));
		} else if (
			name === "email" &&
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		) {
			setErrors((prevErrors) => ({
				...prevErrors,
				email: "Email is not valid",
			}));
		} else if (
			name === "email" &&
			/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		) {
			setErrors((prevErrors) => ({
				...prevErrors,
				email: undefined,
			}));
		} else {
			setErrors((prevErrors) => ({
				...prevErrors,
				[name]: undefined,
			}));
		}
	};

	const handleCheckboxChange = (event) => {
		const { name, checked } = event.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: checked,
		}));
		setErrors((prevErrors) => ({
			...prevErrors,
			[name]: undefined,
		}));
	};

	const handlePhoneChange = (event) => {
		let value = event.target.value;
		value = value.replace(/\D/g, "");

		if (value.length > 3 && value.length <= 6) {
			value = `(${value.substring(0, 3)}) ${value.substring(3)}`;
		} else if (value.length > 6) {
			value = `(${value.substring(0, 3)}) ${value.substring(
				3,
				6
			)}-${value.substring(6)}`;
		}

		if (value.length > 14) {
			value = value.substring(0, 14);
		}

		setFormData((prevState) => ({
			...prevState,
			phone: value,
		}));
	};

	const handlePostcodeChange = (event) => {
		let value = event.target.value;
		value = value.replace(/\D/g, "");

		if (value.length > 3 && value.length <= 6) {
			value = `${value.substring(0, 3)} ${value.substring(3)}`;
		} else if (value.length > 6) {
			value = `${value.substring(0, 3)} ${value.substring(3, 6)}`;
		}

		if (value.length > 7) {
			value = value.substring(0, 7);
		}

		setFormData((prevState) => ({
			...prevState,
			postcode: value,
		}));
	};

	const validateForm = () => {
		let tempErrors = {};
		if (!formData.firstName) tempErrors.firstName = "First name is required";
		if (!formData.lastName) tempErrors.lastName = "Last name is required";
		if (!formData.email) tempErrors.email = "Email is required";
		if (!formData.phone) tempErrors.phone = "Phone is required";
		if (!formData.age || formData.age < 16 || formData.age > 65)
			tempErrors.age = "Age is required and age must be between 16 and 65";
		if (!formData.postcode) tempErrors.postcode = "Postcode is required";
		if (!formData.description || formData.description.length < 150)
			tempErrors.description =
				"Description is required and should be at least 150 characters";
		if (!formData.tshirtSize)
			tempErrors.tshirtSize = "T-shirt size is required";
		if (!formData.acceptCondition)
			tempErrors.acceptCondition = "You must accept the conditions";

		setErrors(tempErrors);

		return Object.keys(tempErrors).length === 0;
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (validateForm()) {
			console.log("Form is valid!");
			console.log(formData);
		} else {
			console.log("Form has errors!");
		}
	};

	const clearForm = () => {
		setFormData({
			firstName: "",
			middleName: "",
			lastName: "",
			email: "",
			phone: "",
			age: "",
			postcode: "",
			description: "",
			tshirtSize: "",
			tshirtColor: "White",
			acceptCondition: false,
		});
		setErrors({});
	};

	return (
		<>
			<Card>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						Form Validator
					</Typography>
					<form onSubmit={handleSubmit}>
						<TextField
							label="First Name"
							variant="outlined"
							name="firstName"
							value={formData.firstName}
							onChange={handleInputChange}
							error={Boolean(errors.firstName)}
							helperText={errors.firstName}
							fullWidth
							margin="normal"
						/>
						<TextField
							label="Middle Name"
							variant="outlined"
							name="middleName"
							value={formData.middleName}
							onChange={handleInputChange}
							fullWidth
							margin="normal"
						/>
						<TextField
							label="Last Name"
							variant="outlined"
							name="lastName"
							value={formData.lastName}
							onChange={handleInputChange}
							error={Boolean(errors.lastName)}
							helperText={errors.lastName}
							fullWidth
							margin="normal"
						/>
						<TextField
							label="Email"
							variant="outlined"
							name="email"
							type="email"
							value={formData.email}
							onChange={handleInputChange}
							error={Boolean(errors.email)}
							helperText={errors.email}
							fullWidth
							margin="normal"
						/>
						<TextField
							label="Phone"
							variant="outlined"
							name="phone"
							value={formData.phone}
							onChange={handlePhoneChange}
							error={Boolean(errors.phone)}
							helperText={errors.phone}
							fullWidth
							margin="normal"
							inputProps={{ maxLength: 14 }}
						/>
						<TextField
							label="Age"
							variant="outlined"
							name="age"
							value={formData.age}
							onChange={handleInputChange}
							error={Boolean(errors.age)}
							helperText={errors.age}
							fullWidth
							margin="normal"
							type="number"
							inputProps={{ min: "16", max: "65", step: "1" }}
						/>
						<TextField
							label="Postcode"
							variant="outlined"
							name="postcode"
							value={formData.postcode}
							onChange={handlePostcodeChange}
							error={Boolean(errors.postcode)}
							helperText={errors.postcode}
							fullWidth
							margin="normal"
						/>
						<TextField
							label="Description"
							variant="outlined"
							name="description"
							value={formData.description}
							onChange={handleInputChange}
							error={Boolean(errors.description)}
							helperText={errors.description}
							fullWidth
							margin="normal"
						/>

						<FormControl
							variant="outlined"
							className={classes.formControl}
							fullWidth
							error={Boolean(errors.tshirtSize)}
						>
							<InputLabel
								ref={InputLabelRef}
								htmlFor="outlined-tshirtSize-simple"
							>
								T-shirt Size
							</InputLabel>
							<Select
								value={formData.tshirtSize}
								onChange={handleInputChange}
								input={
									<OutlinedInput
										name="tshirtSize"
										id="outlined-tshirtSize-simple"
										fullWidth
									/>
								}
							>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								<MenuItem value={"XS"}>XS</MenuItem>
								<MenuItem value={"S"}>S</MenuItem>
								<MenuItem value={"M"}>M</MenuItem>
								<MenuItem value={"L"}>L</MenuItem>
								<MenuItem value={"XL"}>XL</MenuItem>
								<MenuItem value={"XXL"}>XXL</MenuItem>
							</Select>
							<FormHelperText>{errors.tshirtSize}</FormHelperText>
						</FormControl>
						<FormControl
							component="fieldset"
							className={classes.formControl}
							fullWidth
						>
							<FormLabel component="legend">T-shirt colour</FormLabel>
							<RadioGroup
								aria-label="tshirtColor"
								name="tshirtColor"
								className={classes.group}
								value={formData.tshirtColor}
								onChange={handleInputChange}
							>
								<FormControlLabel
									value="White"
									control={<Radio color="primary" />}
									label="White"
								/>
								<FormControlLabel
									value="Black"
									control={<Radio color="primary" />}
									label="Black"
								/>
								<FormControlLabel
									value="Orange"
									control={<Radio color="primary" />}
									label="Orange"
								/>
								<FormControlLabel
									value="Blue"
									control={<Radio color="primary" />}
									label="Blue"
								/>
								<FormControlLabel
									value="Red"
									control={<Radio color="primary" />}
									label="Red"
								/>
							</RadioGroup>
							<FormHelperText>{errors.tshirtColor}</FormHelperText>
						</FormControl>
						<FormControlLabel
							control={
								<Checkbox
									checked={formData.acceptCondition}
									onChange={handleInputChange}
									value="true"
									color="primary"
								/>
							}
							label="Accept Condition *"
						/>
						<FormHelperText error>{errors.acceptCondition}</FormHelperText>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							style={{ marginRight: "10px" }}
						>
							Validate
						</Button>
						<Button variant="contained" color="secondary" onClick={clearForm}>
							Clear Form
						</Button>
					</form>
				</CardContent>
			</Card>
		</>
	);
};

FormValidatorPage.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormValidatorPage);
