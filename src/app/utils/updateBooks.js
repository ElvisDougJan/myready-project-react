import React from 'react'
import { Home } from './../components/Home'
const { update } = require('./BooksAPI')

export const updateBook = async (event, book) =>
  await update(book, event.target.value)
    .then(res => (<Home reloadPage={true} />))
    .catch(err => console.warn(`Erro ao atualizar livro: ${err}`))

// export const updateBooks = () => <Home reloadPage={true} />