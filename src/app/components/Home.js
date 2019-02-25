import React from 'react'
import WantReadBooks from './WantReadBooks'
import ReadBooks from './ReadBooks'
import ListBooksReading from './ListBooksReading'
import { getAll } from './../utils/BooksAPI'

let listCurrentlyRead = []
let listRead = []
let listWantRead = []

async function consultingListBooks() {
  await getAll()
  .then(async list => {
    listCurrentlyRead = await list.filter(book => book.shelf === 'currentlyReading')
    listRead = await list.filter(book => book.shelf === 'wantToRead')
    listWantRead = await list.filter(book => book.shelf === 'read')
    console.log(listRead)
  })
  .catch(err => console.warn(`Error on fetching list of books from API. ERROR: ${err}`))
}

consultingListBooks()

export const Home = () =>
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <ListBooksReading booksList={listCurrentlyRead} />
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <WantReadBooks booksList={listWantRead} />
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <ReadBooks booksList={listRead} />
        </div>
      </div>
    </div>
  </div>
