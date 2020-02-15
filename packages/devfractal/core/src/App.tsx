import { opt, string } from '@stp/utils'
import React from 'react'
import { render } from 'react-dom'
import { component } from './ui'

// tslint:disable typedef

const AppProps = opt({ message: string })

const App = component(AppProps, ({ message = 'hello world' }) => (
  <h1>{message}</h1>
))

render(<App />, document.getElementById('root'))
