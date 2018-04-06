import React, { Component } from 'react';
import { Container/*, Row, Col*/ } from 'reactstrap';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Home from './components/HomeContainer';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<AppNavbar/>
				<Container id="wrapper">
					<Home/>
				</Container>
			</div>
		);
	}
}

export default App;
