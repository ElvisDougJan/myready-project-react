import React, { Component } from 'react'
import { search } from './../utils/BooksAPI'
import { updateBook } from './../utils/updateBooks'

// import debounce from 'lodash.debounce'

export default class SearchBooks extends Component {
  state = {
    listBooks: [],
  }

  componentWillReceiveProps = newProps => {
    if (newProps.queryConsulting !== '') {
      setTimeout(() => {
        this.searchBooks(newProps)
      }, 500)
    } else {
      this.setState(() => ({ listBooks: [] }))
    }
  }

  searchBooks = async newProps => {
    await search(newProps.queryConsulting.toLowerCase())
      .then(res => {
        if (!res.error) {
          this.setState({ listBooks: res })
        }
      })
      .catch(err => console.warn(`Erro ao realizar consulta na API. ${err}`))
  }

  render() {
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {this.state.listBooks.map(book => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks !== undefined ? book.imageLinks.smallThumbnail : null})` }}></div>
                  <div className="book-shelf-changer">
                    <select onClick={async event => await updateBook(event, book)}>
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
      </div>
    )
  }
}