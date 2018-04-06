import React, { Component } from 'react';

class Home extends Component {

	constructor() {
		super();
		this.state = { search: '' };
		
		this.handleChange = this.handleChange.bind(this);
		this.clearSearch = this.clearSearch.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	
	clearSearch() {
		this.setState({ search: '' });
		this.props.onClick();
	}

	onSubmit(event) {
		event.preventDefault();
		let search = this.state.search;
		this.props.onClick(search);
	}

	render() {
		return (
			<form name="searchForm" onSubmit={this.onSubmit} noValidate>
				<h4>Búsqueda</h4>
				<div className="input-group">
					<input type="text" name="search" className="form-control" value={this.state.search} onChange={this.handleChange}/>
					<div className="input-group-prepend">
						<button type="button" className="input-group-text" id="btnGroupAddon" onClick={this.clearSearch}><b>X</b></button>
					</div>
				</div>
			</form>
		);
	}
}

export default Home;
