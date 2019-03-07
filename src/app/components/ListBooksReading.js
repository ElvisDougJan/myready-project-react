import React, { PureComponent } from 'react'
import { updateBook } from './../utils/updateBooks'
import './../style/App.css'
import './../style/my-css.css'

export default class ListBooksReading extends PureComponent {

  state = {
    booksReading: []
  }

  componentWillReceiveProps = async newProps => await this.setState({ booksReading: newProps.booksList })

  render() {
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {this.state.booksReading.length > 0
            ?
            this.state.booksReading.map(book => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                    <div className="book-shelf-changer">
                      <select defaultValue={book.shelf} onClick={async event => await updateBook(event, book) && await this.props.updateState()}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read" >Read</option>
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
            ))
            :
            <div className="no-books">
              Select a new book to read! :D
            </div>
          }
        </ol>
      </div>
    )
  }
}