import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import ListAltIcon from "@material-ui/icons/ListAlt";
import CodeIcon from "@material-ui/icons/Code";
import SecurityIcon from "@material-ui/icons/Security";
import AssignmentIcon from "@material-ui/icons/Assignment";

const drawerWidth = 240;

const styles = (theme) => ({
	root: {
		display: "flex",
	},
	drawer: {
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		marginLeft: drawerWidth,
		[theme.breakpoints.up("sm")]: {
			width: `calc(100% - ${drawerWidth}px)`,
		},
	},
	menuButton: {
		marginRight: 20,
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
	},
});

class ResponsiveDrawer extends React.Component {
	state = {
		mobileOpen: false,
	};

	handleDrawerToggle = () => {
		this.setState((state) => ({ mobileOpen: !state.mobileOpen }));
	};

	render() {
		const { classes, theme } = this.props;

		const drawer = (
			<div>
				<div className={classes.toolbar} />
				<Divider />
				<List>
					<ListItem button component={Link} to="/">
						<ListItemIcon>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary="Home" />
					</ListItem>
					<ListItem button component={Link} to="/todo">
						<ListItemIcon>
							<ListAltIcon />
						</ListItemIcon>
						<ListItemText primary="Todo" />
					</ListItem>
					<ListItem button component={Link} to="/code-validator">
						<ListItemIcon>
							<CodeIcon />
						</ListItemIcon>
						<ListItemText primary="Code Validator" />
					</ListItem>
					<ListItem button component={Link} to="/crypto">
						<ListItemIcon>
							<SecurityIcon />
						</ListItemIcon>
						<ListItemText primary="Crypto" />
					</ListItem>
					<ListItem button component={Link} to="/form-validator">
						<ListItemIcon>
							<AssignmentIcon />
						</ListItemIcon>
						<ListItemText primary="Form Validator" />
					</ListItem>
				</List>
			</div>
		);

		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="Open drawer"
							onClick={this.handleDrawerToggle}
							className={classes.menuButton}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" color="inherit" noWrap>
							ReactJS Tasks
						</Typography>
					</Toolbar>
				</AppBar>
				<nav className={classes.drawer}>
					{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
					<Hidden smUp implementation="css">
						<Drawer
							container={this.props.container}
							variant="temporary"
							anchor={theme.direction === "rtl" ? "right" : "left"}
							open={this.state.mobileOpen}
							onClose={this.handleDrawerToggle}
							classes={{
								paper: classes.drawerPaper,
							}}
						>
							{drawer}
						</Drawer>
					</Hidden>
					<Hidden xsDown implementation="css">
						<Drawer
							classes={{
								paper: classes.drawerPaper,
							}}
							variant="permanent"
							open
						>
							{drawer}
						</Drawer>
					</Hidden>
				</nav>
				<main className={classes.content}>
					<div className={classes.toolbar} />
					{this.props.children}
				</main>
			</div>
		);
	}
}

ResponsiveDrawer.propTypes = {
	classes: PropTypes.object.isRequired,
	container: PropTypes.object,
	theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   IconButton,
//   useTheme,
//   useMediaQuery
// } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
// import HomeIcon from '@material-ui/icons/Home';
// import ListAltIcon from '@material-ui/icons/ListAlt';
// import CodeIcon from '@material-ui/icons/Code';
// import SecurityIcon from '@material-ui/icons/Security';
// import AssignmentIcon from '@material-ui/icons/Assignment';

// const ResponsiveDrawer = ({ children }) => {
//   const [open, setOpen] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   const drawerWidth = 200;
//   const mainStyle = isMobile ? { padding: '16px', flexGrow: 1 } : { padding: '16px', marginLeft: drawerWidth, flexGrow: 1 , textAlign: 'center' };

//   const handleDrawerToggle = () => {
//     setOpen(!open);
//   };

//   const drawerContent = (
// <List>
//   <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
//     <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
//         <HomeIcon />
//     </IconButton>
//     <ListItemText primary="Home" />
//   </ListItem>
//   <ListItem button component={Link} to="/todo" onClick={handleDrawerToggle}>
//     <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
//         <ListAltIcon />
//     </IconButton>
//     <ListItemText primary="Todo" />
//   </ListItem>
//   <ListItem button component={Link} to="/code-validator" onClick={handleDrawerToggle}>
//     <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
//         <CodeIcon />
//     </IconButton>
//     <ListItemText primary="Code Validator" />
//   </ListItem>
//   <ListItem button component={Link} to="/crypto" onClick={handleDrawerToggle}>
//     <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
//         <SecurityIcon />
//     </IconButton>
//     <ListItemText primary="Crypto" />
//   </ListItem>
//   <ListItem button component={Link} to="/form-validator" onClick={handleDrawerToggle}>
//     <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
//         <AssignmentIcon />
//     </IconButton>
//     <ListItemText primary="Form Validator" />
//   </ListItem>
// </List>
//   );

//   return (
//     <div>
//       <AppBar position="static">
//         <Toolbar>
//           {isMobile && (
//             <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
//               <MenuIcon />
//             </IconButton>
//           )}
//           <Typography variant="h6" style={mainStyle}>
//             ReactJS Tasks
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       {isMobile ? (
//         <Drawer anchor="left" open={open} onClose={handleDrawerToggle}>
//           {drawerContent}
//         </Drawer>
//       ) : (
//         <Drawer variant="permanent" open>
//           {drawerContent}
//         </Drawer>
//       )}
//       <main style={mainStyle}>{children}</main>
//     </div>
//   );
// };

// export default ResponsiveDrawer;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Box from '@mui/material/Box';
// import HomeIcon from '@mui/icons-material/Home';
// import ListAltIcon from '@mui/icons-material/ListAlt';
// import CodeIcon from '@mui/icons-material/Code';
// import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
// import FactCheckIcon from '@mui/icons-material/FactCheck';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { spacing } from '@mui/system';

// const Layout = ({ children }) => {
//     const [open, setOpen] = React.useState(false);

//     const isMobile = useMediaQuery('(max-width:600px)');

//     const toggleDrawer = (isOpen) => (event) => {
//         setOpen(isOpen);
//     };

//     const drawerWidth = 300;

//     const list = () => (
//         <Box
//             sx={{
//                 width: drawerWidth,
//                 marginTop: 5}}
//             role="presentation"
//             onClick={toggleDrawer(false)}
//             onKeyDown={toggleDrawer(false)}
//         >
//             <List>
//                 <ListItem key="Home Page" component={Link} to="/" disablePadding>
//                     <ListItemButton>
//                         <ListItemIcon>
//                             <HomeIcon />
//                         </ListItemIcon>
//                         <ListItemText primary="Home Page" />
//                     </ListItemButton>
//                 </ListItem>
//                 <ListItem key="Todo" component={Link} to="/todo" disablePadding>
//                     <ListItemButton>
//                         <ListItemIcon>
//                             <ListAltIcon />
//                         </ListItemIcon>
//                         <ListItemText primary="Todo Page" />
//                     </ListItemButton>
//                 </ListItem>
//                 <ListItem key="Code Validator" component={Link} to="/code-validator" disablePadding>
//                     <ListItemButton>
//                         <ListItemIcon>
//                             <CodeIcon />
//                         </ListItemIcon>
//                         <ListItemText primary="Code Validator" />
//                     </ListItemButton>
//                 </ListItem>
//                 <ListItem key="Cryptocurrency" component={Link} to="/crypto" disablePadding>
//                     <ListItemButton>
//                         <ListItemIcon>
//                             <MonetizationOnIcon />
//                         </ListItemIcon>
//                         <ListItemText primary="Cryptocurrency" />
//                     </ListItemButton>
//                 </ListItem>
//                 <ListItem key="Form Validator" component={Link} to="/form-validator" disablePadding>
//                     <ListItemButton>
//                         <ListItemIcon>
//                             <FactCheckIcon />
//                         </ListItemIcon>
//                         <ListItemText primary="Form Validator" />
//                     </ListItemButton>
//                 </ListItem>
//             </List>
//         </Box>
//     );

//     return (
//         <>
//             { isMobile && (
//                 <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
//                     <MenuIcon />
//                 </IconButton>
//             )}

//             <Drawer
//                 open={ isMobile ? open : true }
//                 onClose={ toggleDrawer(false) }
//                 variant={ isMobile ? "temporary" : "permanent" }
//                 style={{ width: drawerWidth }}
//             >
//                 { list() }
//             </Drawer>

//             <Box sx={{ ml: isMobile ? 0 : drawerWidth }}>
//                 {children}
//             </Box>
//         </>
//     );
// };

// export default Layout;
