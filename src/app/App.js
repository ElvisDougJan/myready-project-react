import React from 'react'
import { Route, Link } from 'react-router-dom'
import './style/App.css'
import SearchBar from './components/SearchBar'
import Home from './components/Home'

export default class BooksApp extends React.Component {

  render() {
    return (
      <div>
        <Route exac path='/' component={Home} />
        <Route path='/search' component={SearchBar} />
        <Link className="open-search" to='/search'>
          Add a book
        </Link>
      </div>
    )
  }
}