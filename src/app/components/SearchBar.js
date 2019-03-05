import React, { Component } from 'react'
import SearchBooks from './SearchBook'
import { Route, Link } from 'react-router-dom'

export default class SearchBar extends Component {

  state = {
    query: ''
  }

  updateQuery = query => {
    this.setState(() => ({
      query: query
    }))
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'>
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              // value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <Route exac path='/search' render={() => (
          <SearchBooks queryConsulting={this.state.query} />
        )} />
      </div>
    )
  }
}