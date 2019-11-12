import React from 'react';
import ListItem from './ListItem';

export default class FilterableList extends React.Component {
	checkPrintFilters = (book) => {
		if(this.props.printFilterOption === 'Books') {
			return book.volumeInfo.printType === "BOOK"
		} else if (this.props.printFilterOption === 'Magazine') {
			return book.volumeInfo.printType === "MAGAZINE"
		} else if (this.props.printFilterOption === 'All') {
			return book
		}
	}

	checkBookFilters = (book) => {
		if(this.props.bookFilterOption === 'eBook') {
			return book.saleInfo.isEbook === true
		} else if (this.props.bookFilterOption === 'For Sale') {
			return book.saleInfo.saleability === "FOR_SALE"
		} else if(this.props.bookFilterOption === 'Mature') {
			return book.volumeInfo.maturityRating === 'MATURE'
		} else if (this.props.bookFilterOption === 'No Filter') {
			return book
		}
	}

	render() {
		const {searchTerm, printFilterOption, bookFilterOption, books} = this.props;
		const list = this.props.books
			.filter(book => this.checkPrintFilters(book))
			.filter(book => this.checkBookFilters(book))
			.map((book, i) => <ListItem {...book} key={i} />)

		return(
			<div className="FilterableList">
				{list}
			</div>
		)
	}
}