import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "./components/Grid";
import NoMatch from "./pages/NoMatch";
import Head from "./components/Head/Head";
import Nav from "./components/Nav/Nav"
import Feed from "./pages/Feed";
import Clinic from "./pages/Clinic";
import Info from "./pages/Info";
import "./App.scss";

function App() {
	const [collapsed, setCollapsed] = useState(true);
	const [toggled, setToggled] = useState(false);

	const handleCollapsedChange = (nextChecked) => {
		console.log("COLLAPSED: ", collapsed);
		console.log("NEXT: ", nextChecked);
		setCollapsed(nextChecked);
	};

	const handleToggleSidebar = (value) => {
		console.log("TOGGLED: ", toggled);
		console.log("(next) VALUE: ", value);
		setToggled({ value });
		setCollapsed(false);
	};

	return (
		<Router>
			<Container>
				<Nav className="app"
					collapsed={collapsed}
					handleCollapsedChange={handleCollapsedChange}
				toggled={toggled}
				handleToggleSidebar={handleToggleSidebar}
				/>
				<main className="mainOverrides app">
					<Head
					toggled={toggled}
					handleToggleSidebar={handleToggleSidebar}
					/>
					<Switch>
						<Route exact path="/clinic" component={Clinic} />
						<Route exact path="/info" component={Info} />
						<Route exact path={["/", "/feed"]} component={Feed} />
						<Route component={NoMatch} />
					</Switch>
				</main>

			</Container>
		</Router>
	);
}

export default App;