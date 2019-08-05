import React from 'react'
import { render } from 'react-dom'
import { todo } from './db'
import { manyQuery, toJSONServerQuery } from './query'
import { rest } from './rest'

// tslint:disable typedef no-unbound-method

render(<h1>hello world</h1>, document.getElementById('root'))

const todoAPI = rest({
  baseURL: 'http://localhost:9999',
  resource: 'todos',
  spec: todo,
})

todoAPI
  .many({
    query: toJSONServerQuery(manyQuery(todo.type.props), {
      range: { current: 1, limit: 5 },
    }),
  })
  .then(console.log)
  .catch(console.error)
