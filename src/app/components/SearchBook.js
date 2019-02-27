import React, { Component } from 'react'
import { getAll } from './../utils/BooksAPI'

export default class SearchBooks extends Component {

  state = {
    query: '',
    listBooks: []
  }

  componentDidMount = async () => await getAll().then(list => this.setState(() => ({ listBooks: list })))

  render() {
    const { listBooks } = this.state
    const filteredTitle = listBooks.filter(book =>
      book.title.toLowerCase().includes(this.props.queryConsulting.toLowerCase()))
    return (
      <div className="search-books-results">
        {this.props.onTeste}
        <ol className="books-grid">
          {filteredTitle.map(book => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                  <div className="book-shelf-changer">
                    <select>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">
                  {book.authors.map((author, index) => (
                    <p key={index}>
                      {author}
                    </p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}