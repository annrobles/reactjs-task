import React from "react";
import { observer, inject } from "mobx-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ResponsiveDrawer from "./components/Layout";
import HomePage from "./pages/HomePage";
import FormValidatorPage from "./pages/FormValidatorPage";
import TodoPage from "./pages/TodoPage";
import CryptoPage from "./pages/CryptoPage";
import CodeValidatorPage from "./pages/CodeValidatorPage";

@inject("appStore")
@observer
class App extends React.Component {
	render() {
		return (
			<Router>
				<ResponsiveDrawer>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/todo" component={TodoPage} />
						<Route path="/code-validator" component={CodeValidatorPage} />
						<Route path="/crypto" component={CryptoPage} />
						<Route path="/form-validator" component={FormValidatorPage} />
					</Switch>
				</ResponsiveDrawer>
			</Router>
		);
	}
}

export default App;
