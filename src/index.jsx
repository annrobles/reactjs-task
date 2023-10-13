import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "mobx-react";
import { syncHistoryWithStore } from "@ibm/mobx-react-router";
import { Router } from "react-router";
import { appStore, routerStore } from "./store/store";
import { createBrowserHistory } from "history";

const stores = {
	appStore,
	routerStore,
};

const browseHistory = createBrowserHistory();
const history = syncHistoryWithStore(browseHistory, routerStore);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<Provider {...stores}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
