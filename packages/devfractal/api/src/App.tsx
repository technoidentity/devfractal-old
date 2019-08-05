import React from 'react'
import { render } from 'react-dom'
import { todo as Todo } from './db'
import { manyQuery, toJSONServerQuery } from './query'
import { rest } from './rest'

// tslint:disable typedef no-unbound-method

render(<h1>hello world</h1>, document.getElementById('root'))

const todoAPI = rest(Todo, {
  baseURL: 'http://localhost:9999',
  resource: 'todos',
})

todoAPI
  .many({
    query: toJSONServerQuery(manyQuery(Todo.type.props), {
      range: { current: 1, limit: 5 },
    }),
  })
  .then(console.log)
  .catch(console.error)
