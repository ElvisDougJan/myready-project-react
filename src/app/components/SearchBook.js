import React, { Component } from 'react'
import { search, get } from './../utils/BooksAPI'
import { updateBook } from './../utils/updateBooks'
import debounce from 'lodash.debounce'
import './../style/my-css.css'

export default class SearchBooks extends Component {
  state = {
    listBooks: [],
    selectedBookShelf: 'none'
  }

  componentWillReceiveProps = debounce(
    async newProps =>
      newProps.queryConsulting !== ''
        ? await this.searchBooks(newProps)
        : this.setState(() => ({ listBooks: [] }))
    , 500)

  searchBooks = async newProps => {
    await search(newProps.queryConsulting.toLowerCase())
      .then(async res => {
        if (!res.error) {
          await this.setState({ listBooks: res })
        }
      })
      .catch(err => console.warn(`Erro ao realizar consulta na API. ${err}`))
  }

  verifyBookState = async id =>
    await get(id)
      .then(res => this.setState(() => ({
        selectedBookShelf: res.shelf
      })))
      .catch(err => console.warn(err))

  clearSelectedShelf = () => this.setState(() => ({ selectedBookShelf: 'none' }))

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
                        onChange={async event => await updateBook(event, book)}
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
            <p>Please, search for a book.</p>
          </div>
        }
      </div>
    )
  }
}