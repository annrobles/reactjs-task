import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import {
	Checkbox,
	IconButton,
	List,
	ListItem,
	ListItemText,
	ListItemSecondaryAction,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Box } from "@material-ui/core";

const styles = (theme) => ({
	root: {
		flexGrow: 1,
	},
	todoCard: {
		textAlign: "center",
	},
	cardTitle: {
		textAlign: "center",
	},
	card: {
		maxWidth: 345,
	},
	taskContainer: {
		textAlign: "center",
	},
});

const TodoPage = (props) => {
	const { classes } = props;
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("");

	const addTask = () => {
		if (newTask.trim() === "") {
			return;
		}
		setTasks([...tasks, { text: newTask, completed: false }]);
		setNewTask("");
	};

	const toggleTask = (index) => {
		const newTasks = [...tasks];
		newTasks[index].completed = !newTasks[index].completed;
		setTasks(newTasks);
	};

	const deleteTask = (index) => {
		const newTasks = [...tasks];
		newTasks.splice(index, 1);
		setTasks(newTasks);
	};

	const completedTasksCount = tasks.filter((task) => task.completed).length;

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			addTask();
			e.preventDefault();
		}
	};

	return (
		<>
			<Card className={classes.todoCard}>
				<CardContent>
					<Typography
						gutterBottom
						variant="h5"
						component="h2"
						className={classes.cardTitle}
					>
						THINGS TO DO:
					</Typography>
					<Divider />
					<List>
						{tasks.map((task, index) => (
							<ListItem
								key={index}
								style={{
									backgroundColor: task.completed
										? "green"
										: "transparent",
								}}
							>
								<Checkbox
									edge="start"
									checked={task.completed}
									tabIndex={-1}
									disableRipple
									onChange={() => toggleTask(index)}
								/>
								<ListItemText
									primary={task.text}
									style={{
										textDecoration: task.completed ? "line-through" : "none",
										color: task.completed ? "white" : "black",
									}}
								/>
								<ListItemSecondaryAction>
									<IconButton
										edge="end"
										aria-label="delete"
										onClick={() => deleteTask(index)}
									>
										<CloseIcon />
									</IconButton>
								</ListItemSecondaryAction>
							</ListItem>
						))}
					</List>
					<h2>DONE: {completedTasksCount}</h2>
					<Divider />
					<Box display="flex" alignItems="center" justifyContent="center">
						<TextField
							id="outlined-full-width"
							style={{ margin: 7, padding: 4 }}
							placeholder="Enter new Task"
							margin="normal"
							variant="outlined"
							InputLabelProps={{
								shrink: true,
							}}
							value={newTask}
							onKeyPress={handleKeyPress}
							onChange={(e) => setNewTask(e.target.value)}
						/>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							style={{ margin: 8, padding: 16 }}
							onClick={addTask}
						>
							ADD TASK
						</Button>
					</Box>
				</CardContent>
			</Card>
		</>
	);
};

export default withStyles(styles)(TodoPage);
