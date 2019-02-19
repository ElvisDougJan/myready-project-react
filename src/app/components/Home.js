import React from 'react'
import WantReadBooks from './WantReadBooks'
import ReadBooks from './ReadBooks'
import ListBooksReading from './ListBooksReading'

export const Home = () =>
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <ListBooksReading />
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <WantReadBooks />
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <ReadBooks />
        </div>
      </div>
    </div>
  </div>
