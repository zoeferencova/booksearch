import React from 'react';
import './App.css';
import FilterableList from './FilterableList';
import SearchBox from './SearchBox'
import FilterOptions from './FilterOptions'


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

  updateSearchTerm = (term) => {
    
    this.setState({
      searchTerm: term
    })
    
    const url = `https://www.googleapis.com/books/v1/volumes?key=AIzaSyDY2TOX6qQ3DJgTpP5pQslf6lD1o_-f9wo&q=${term}&maxResults=10`
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

  updatePrintFilterOption = (option) => {
    this.setState({
      printFilterOption: option
    })
  }

  updateBookFilterOption = (option) => {
    this.setState({
      bookFilterOption: option
    })
  }

  render() {
    const {searchTerm, printFilterOption, bookFilterOption, books, error} = this.state
    return(
      <div className="App">
        <header className="header">
          <h1 className="header-text">Google Book Search</h1>
        </header>
        <SearchBox
          searchTerm={searchTerm}
          handleUpdate={this.updateSearchTerm} />
        <FilterOptions
          books={books}
          printFilterOption={printFilterOption}
          bookFilterOption={bookFilterOption}
          handlePrintFilterChange={this.updatePrintFilterOption}
          handleBookFilterChange={this.updateBookFilterOption} />      
        {error}
        <FilterableList 
          books={books}
          searchTerm={searchTerm}
          printFilterOption={printFilterOption}
          bookFilterOption={bookFilterOption} />      
      </div>
    )
  }
}