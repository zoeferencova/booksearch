import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import FilterableList from './FilterableList';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      printFilterOption: 'All',
      bookFilterOption: 'No Filter',
      books: [],
    }
  }

  updateSearchTerm(term) {
    this.setState({
      searchTerm: term
    })
  }

  updatePrintFilterOption(option) {
    this.setState({
      printFilterOption: option
    })
  }

  updateBookFilterOption(option) {
    this.setState({
      bookFilterOption: option
    })
  }

  componentDidMount() {
    const url = `https://www.googleapis.com/books/v1/volumes?key=AIzaSyDY2TOX6qQ3DJgTpP5pQslf6lD1o_-f9wo&q=${this.state.searchTerm}&maxResults=10`
    fetch(url)
      .then(response => {
        if(!response.ok) {
          throw new Error('Something went wrong')
        }
        return response.json()
      })
      .then(data => {
        this.setState({
          books: data.items,
          error: null,
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
  }

  render() {
    return(
      <div className="App">
        <header className="header">
          <h1 className="header-text">Google Book Search</h1>
        </header>
        <SearchBar
          searchTerm={this.state.searchTerm}
          printFilterOption={this.state.printFilterOption}
          bookFilterOption={this.state.bookFilterOption}
          handleUpdate={term => this.updateSearchTerm(term)}
          handlePrintFilterChange={option => this.updatePrintFilterOption(option)}
          handleBookFilterChange={option => this.updateBookFilterOption(option)} />
        <FilterableList 
          books={this.state.books}
          searchTerm={this.state.searchTerm}
          printFilterOption={this.state.printFilterOption}
          bookFilterOption={this.state.bookFilterOption} />
      </div>
    )
  }
}