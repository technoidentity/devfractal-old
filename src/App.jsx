import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'
import { Docs } from './docs'
import hot from 'react-hot-reload.macro'
import ScrollToTop from './docs/ScrollToTop'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <ScrollToTop>
          <Docs />
        </ScrollToTop>
      </HashRouter>
    )
  }
}

export default hot(App)
