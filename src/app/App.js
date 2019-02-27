import React from 'react'
import { Route, Link } from 'react-router-dom'
import './style/App.css'
import SearchBar from './components/SearchBar'
import { Home } from './components/Home'

export const App = () =>
  <div>
    <Route exact path='/' component={Home} />
    <Route path='/search' component={SearchBar} />
    <Link className="open-search" to='/search'>
      <button></button>
    </Link>
  </div>