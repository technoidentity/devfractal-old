import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'
import { Docs } from './docs'
import hot from 'react-hot-reload.macro'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Docs />
      </HashRouter>
    )
  }
}

export default hot(App)
