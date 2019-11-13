import React from 'react';
import './App.css'

export default class ListItem extends React.Component {
	

	render() {
		const info = this.props.volumeInfo;
		let authors = ''
		if(info.authors) {
			for(let i=0; i < info.authors.length; i++) {
				if(authors.length > 1) {
					authors += ` & ${info.authors[i]}`
				} else {
					authors += info.authors[i]
				}
			}
		}
		const price = this.props.saleInfo.saleability === "FOR_SALE" ? `Price: ${this.props.saleInfo.retailPrice.amount} ${this.props.saleInfo.retailPrice.currencyCode}` : 'Not for sale';

		const image = info.imageLinks ? <img src={info.imageLinks.smallThumbnail} alt={info.title} /> : '';

		return(
			<div className="ListItem">
				<div className="Item__row">
					<div className="Item__title">
						<a href={info.infoLink} target="_blank" rel="noopener noreferrer">{info.title}</a>
					</div>
					<div className="Item__data">
						<div className="Item__image">
							{image}
						</div>
						<div className="Item__info">
							<p className="Item__author">Author: {authors}</p>
							<p className="Item__price">{price}</p>
							<p className="Item__price">{info.description}</p>
						</div>
					</div>
					
					
				</div>
			</div>
		)
	}
}