import React from 'react';
import SearchBox from './SearchBox';
import FilterOptions from './FilterOptions';

export default class FilterableList extends React.Component {
	render() {
		return(
			<div className="SearchBar">
				<SearchBox
					searchTerm={this.props.searchTerm}
					handleUpdate={this.props.handleUpdate} />
				<FilterOptions
					books={this.props.books}
			        printFilterOption={this.props.printFilterOption}
			        bookFilterOption={this.props.bookFilterOption}
			        handlePrintFilterChange={this.props.handlePrintFilterChange}
          	 		handleBookFilterChange={this.props.handleBookFilterChange} 
          	/>
			</div>
		)
	}
}