import React from 'react'
import { Home } from './../components/Home'
const { update } = require('./BooksAPI')

/* Updating on API and forcing component Home reloading for update yours childs */
export const updateBook = async (event, book) =>
  await update(book, event.target.value)
    .then(() => (<Home />))
    .catch(err => console.warn(`Erro ao atualizar livro: ${err}`))