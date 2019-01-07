import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'
import { Docs } from './docs'

export class App extends Component {
  render() {
    return (
      <HashRouter>
        <Docs />
      </HashRouter>
    )
  }
}

export default App
