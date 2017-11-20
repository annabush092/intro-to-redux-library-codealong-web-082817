import { combineReducers } from 'redux'
import {createStore} from 'redux'

import {booksReducer} from './booksReducer.js'
import {authorsReducer} from './authorsReducer.js'
import {counterReducer} from './counterReducer.js'

const rootReducer = combineReducers({
  counter: counterReducer,
  books: booksReducer,
  authors: authorsReducer
})

export const store = createStore(rootReducer)
