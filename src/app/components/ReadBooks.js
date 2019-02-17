import React, { Component } from 'react'
import { getAll } from './../utils/BooksAPI'

class ReadBooks extends Component {
  state = {
    booksRead: []
  }

  async consultingReadBooks() {
    await getAll()
      .then(list => this.setState({ booksRead: list.filter(book => book.shelf === 'read') }))
      .catch(err => console.warn(`Error on consulting list of read books. ERROR: ${err}`))
  }

  async componentDidMount() {
    await this.consultingReadBooks()
  }

  render() {
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {this.state.booksRead.map(book => (
            <li key={ book.id }>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
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
                <div className="book-title">{ book.title }</div>
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

export default ReadBooks