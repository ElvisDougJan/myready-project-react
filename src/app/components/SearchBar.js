import React, { Component } from 'react'
import SearchBooks from './SearchBook'

class SearchBar extends Component {

  state = {
    query: ''
  }

  updateQuery = query => {
    this.setState(() => ({
      query: query.trim()
    }))
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <SearchBooks queryConsulting={this.state.query} />
      </div>
    )
  }
}

export default SearchBar