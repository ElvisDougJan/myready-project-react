import React from 'react'
import Book from './Book'
import BookCase from './BookCase'
import { getAll } from './../utils/BooksAPI'
import Loader from './../components/Loader'

export class Home extends React.Component {
  state = {
    listCurrentlyRead: [],
    listWantRead: [],
    listRead: [],
    loader: true
  }

  componentDidMount = async () => await this.updateState()

  updateState = async () => {
    this.setState(() => ({ loader: true }))

    const filter = books => shelf => books.filter(books => books.shelf === shelf)

    await getAll().then(async list => {
      const filterBy = await filter(list)
      await this.setState(() => ({
        listCurrentlyRead: filterBy('currentlyReading'),
        listWantRead: filterBy('wantToRead'),
        listRead: filterBy('read'),
        loader: false
      }))
    })
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {this.state.loader
          ?
          <Loader />
          :
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <Book listBooks={this.state.listCurrentlyRead} updateState={this.updateState}/>
                {/* <BookCase listBooks={this.state.listCurrentlyRead} updateState={this.updateState} /> */}
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <Book listBooks={this.state.listWantRead} updateState={this.updateState}/>
                {/* <BookCase listBooks={this.state.listWantRead} updateState={this.updateState} /> */}
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <Book listBooks={this.state.listRead} updateState={this.updateState}/>
                {/* <BookCase listBooks={this.state.listRead} updateState={this.updateState} /> */}
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}
