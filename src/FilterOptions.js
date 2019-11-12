import React from 'react';

export default class FilterOptions extends React.Component {

	render() {
		return(
			<div className="FilterOptions">
				<label htmlFor="printType">Print Type: </label>
				<select id="printType" onChange={e => this.props.handlePrintFilterChange(e.target.value)}>
					<option value="All">All</option>
					<option value="Books">Books</option>
					<option value="Magazines">Magazines</option>
				</select>
				<label htmlFor="bookType">Book Type: </label>
				<select id="bookType" onChange={e => this.props.handleBookFilterChange(e.target.value)}>
					<option value="No Filter">No Filter</option>
					<option value="eBook">eBook</option>
					<option value="For Sale">For Sale</option>
					<option value="Mature">Mature</option>
				</select>
			</div>
		)
	}
}