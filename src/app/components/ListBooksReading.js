import React, { Component } from 'react'
import { update } from '../utils/BooksAPI'
import './../style/App.css'

export default class ListBooksReading extends Component {

  state = {
    booksReading: []
  }

  componentWillReceiveProps = async newProps => await this.setState({ booksReading: newProps.booksList })

  updateBook = (event, book) => {
    update(book, { shelf: event.target.value })
      .then(res => console.log(res))
  }

  render() {
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {this.state.booksReading.map(book => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                  <div className="book-shelf-changer">
                    <select onClick={event => this.updateBook(event, book)}>
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