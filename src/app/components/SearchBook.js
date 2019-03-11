import React, { Component } from 'react'
import { search } from './../utils/BooksAPI'
import debounce from 'lodash.debounce'
import Book from './Book'
import './../style/my-css.css'

export default class SearchBooks extends Component {
  state = {
    listBooks: []
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

  render() {
    return (<Book listBooks={this.state.listBooks} />)
  }
}