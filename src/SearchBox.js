import React from 'react';

export default class SearchBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}
	}

	handleChange = (event) => {
		this.setState({term: event.target.value})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.handleUpdate(this.state.term)
	}

	render() {
		return(
			<div className="SearchBox">
				<form className="searchForm" onSubmit={this.handleSubmit} >
					<label htmlFor="searchTerm">Search: </label>
					<input type="text" id="searchTerm" name="searchTerm" value={this.state.term} onChange={this.handleChange} />
					<button type="submit">Search</button>
				</form>
			</div>
		)
	}
}