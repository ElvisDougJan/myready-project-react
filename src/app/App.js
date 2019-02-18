import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import './style/App.css'
import ListBooksReading from './components/ListBooksReading'
import WantReadBooks from './components/WantReadBooks'
import ReadBooks from './components/ReadBooks'

class BooksApp extends React.Component {

  state = {
    showSearchPage: false,
    query: '',
    listBooks: []
  }

  updateQuery = query => {
    this.setState(() => ({
      query: query.trim()
    }))
  }

  async componentDidMount() {
    await BooksAPI.getAll().then(list => this.setState(() => ({ listBooks: list })))
    console.log(this.state.listBooks)
  }

  render() {
    const { query, listBooks } = this.state
    const filteredTitle = listBooks.filter(book =>
      book.title.toLowerCase().includes(query.toLowerCase()))

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                <input
                  type="text"
                  placeholder="Search by title or author"
                  value={query}
                  onChange={event => this.updateQuery(event.target.value)}
                />
                {filteredTitle.map(book => <p key={book.id}>{book.title}</p>)}
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <ListBooksReading />
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <WantReadBooks />
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <ReadBooks />
                  </div>
                </div>
              </div>
              <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
              </div>
            </div>
          )}
      </div>
    )
  }
}

export default BooksApp
