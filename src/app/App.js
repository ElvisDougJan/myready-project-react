import React from 'react'
import { Route, Link } from 'react-router-dom'
import './style/App.css'
import SearchBar from './components/SearchBar'
import Home from './components/Home'


const App = () => 
  <div>
    <Route exac path='/search' render={() => (<SearchBar />)} />
    <Route exac path='/' render={() => (<Home />)} />
    <Link className="open-search" to='/search'>
      <button></button>
    </Link>
  </div>

export default App