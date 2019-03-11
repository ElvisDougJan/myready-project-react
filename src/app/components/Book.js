import React, { PureComponent } from 'react'
import { updateBook } from './../utils/updateBooks'
import { get } from './../utils/BooksAPI'
import './../style/App.css'
import './../style/my-css.css'

export default class Book extends PureComponent {

  state = {
    listBooks: [],
    book: ''
  }

  componentDidMount = () => this.setState(() => ({ listBooks: this.props.listBooks }))

  componentWillReceiveProps = newProps => this.setState(() => ({ listBooks: newProps.listBooks }))

  clearSelectedShelf = () => this.setState(() => ({ selectedBookShelf: 'none' }))

  verifyBookState = async id =>
    await get(id)
      .then(res => this.setState(() => ({
        selectedBookShelf: res.shelf
      })))
      .catch(err => console.warn(err))

  render() {
    return (
      <div className="search-books-results">
        {this.state.listBooks.length > 0
          ?
          <ol className="books-grid withContent">
            {this.state.listBooks.map(book => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks !== undefined ? book.imageLinks.smallThumbnail : null})` }}></div>
                    <div className="book-shelf-changer">
                      <select
                        value={this.state.selectedBookShelf}
                        onFocus={async () => await this.verifyBookState(book.id)}
                        onChange={
                          async event => await updateBook(event, book) &&
                            this.props.updateState
                            ? await this.props.updateState()
                            : null}
                        onBlur={() => this.clearSelectedShelf()}
                      >
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
                    {book.authors !== undefined
                      ?
                      book.authors.map((author, index) => (
                        <p key={index}>
                          {author}
                        </p>
                      ))
                      : <p><i>AUTHOR NOT INFORMED</i></p>}
                  </div>
                </div>
              </li>
            ))}
          </ol>
          :
          <div className="withoutContent">
            <p>Nothing to show.</p>
          </div>
        }
      </div>
    )
  }
}
