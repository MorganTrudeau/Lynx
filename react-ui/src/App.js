import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Main from "./containers/Main";
import Footer from "./components/Footer";
import "./styles/global.css";

class App extends Component {
	render() {
		return (
			<div className="app">
				<Navigation />
				<Main />
				<Footer />
			</div>
		);
	}
}

export default App;
