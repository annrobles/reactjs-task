import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextareaAutosize, Button, Typography, Box } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const styles = (theme) => ({
	root: {
		flexGrow: 1,
	},
	cardTitle: {
		textAlign: "center",
	},
	card: {
		maxWidth: 345,
	},
});

const CodeValidatorPage = (props) => {
	const { classes } = props;

	const [code, setCode] = useState("");
	const [result, setResult] = useState(null);

	const validateCode = () => {
		const stack = [];
		const chars = { "<": ">", "[": "]", "{": "}", "(": ")" };
		const counter = {
			"<": 0,
			">": 0,
			"[": 0,
			"]": 0,
			"{": 0,
			"}": 0,
			"(": 0,
			")": 0,
		};

		for (let char of code) {
			if (chars[char]) {
				stack.push(char);
			} else if (Object.values(chars).includes(char)) {
				if (
					stack.pop() !== Object.keys(chars).find((key) => chars[key] === char)
				) {
					setResult("Invalid");
					return;
				}
			}
			if (counter[char] !== undefined) {
				counter[char]++;
			}
		}

		if (stack.length !== 0) {
			setResult("Invalid");
			return;
		}

		setResult(
			`Valid;\n<: ${counter["<"]}, >: ${counter[">"]}, [: ${counter["["]}, ]: ${counter["]"]}, {: ${counter["{"]}, }: ${counter["}"]}, (: ${counter["("]}, ): ${counter[")"]}`
		);
	};

	return (
		<>
			<Card className={classes.todoCard}>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						Code Validator
					</Typography>
					<Box display="flex" flexDirection={"column"} alignItems="center" justifyContent="center">
						<textarea name="" id="" cols="30" rows="10" placeholder="Enter code here" 							value={code}
							onChange={(e) => setCode(e.target.value)}></textarea>
						<Button variant="contained" color="primary" onClick={validateCode} style={{ margin: "10px" }}>
							Validate
						</Button>
						{result && <Typography variant="body1">{result}</Typography>}
					</Box>
				</CardContent>
			</Card>
		</>
	);
};

export default withStyles(styles)(CodeValidatorPage);
