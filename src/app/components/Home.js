import React from 'react'
import WantReadBooks from './WantReadBooks'
import ReadBooks from './ReadBooks'
import ListBooksReading from './ListBooksReading'
import { getAll } from './../utils/BooksAPI'

export class Home extends React.Component {

  // constructor() {
  //   super()
  // }

  state = {
    listCurrentlyRead: [],
    listWantRead: [],
    listRead: []
  }

  async componentDidMount() {
    await getAll().then(list => {
      this.setState(() => ({
        listCurrentlyRead: list.filter(book => book.shelf === 'currentlyReading'),
        listWantRead: list.filter(book => book.shelf === 'wantToRead'),
        listRead: list.filter(book => book.shelf === 'read')
      }))
    })
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <ListBooksReading booksList={this.state.listCurrentlyRead} />
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <WantReadBooks booksList={this.state.listWantRead} />
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <ReadBooks booksList={this.state.listRead} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
