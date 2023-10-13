import React from "react";
import { observer, inject } from "mobx-react";
import { Route, Link } from "react-router-dom";

const HomePage = () => <h2>Home Page</h2>;
const TodoListPage = () => <h2>TODO List</h2>;
const CodeValidatorPage = () => <h2>Code Validator</h2>;
const CryptoPage = () => <h2>Cryptocurrency</h2>;
const FormValidatorPage = () => <h2>Form Validator</h2>;

@inject("appStore")
@observer
class App extends React.Component {
	render() {
		return (
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home Page</Link>
						</li>
						<li>
							<Link to="/todo">Todo List </Link>
						</li>
						<li>
							<Link to="/code-validator">Code Validator</Link>
						</li>
						<li>
							<Link to="/crypto">Cryptocurrency</Link>
						</li>
						<li>
							<Link to="/form-validator">Form Validator</Link>
						</li>
					</ul>
				</nav>
				<Route exact path="/" component={HomePage} />
				<Route path="/todo" component={TodoListPage} />
				<Route path="/code-validator" component={CodeValidatorPage} />
				<Route path="/crypto" component={CryptoPage} />
				<Route path="/form-validator" component={FormValidatorPage} />
			</div>
		);
	}
}

export default App;
