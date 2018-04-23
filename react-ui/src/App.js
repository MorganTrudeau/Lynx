import React, { Component } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./containers/Main";
import Footer from "./components/Footer";
import "./styles/global.css";

class App extends Component {
	render() {
		return (
			<div className="app">
				<Header />
				<Navigation />
				<Main />
				<Footer />
			</div>
		);
	}
}

export default App;
