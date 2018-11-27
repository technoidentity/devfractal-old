import * as React from 'react'

import { hot, setConfig } from 'react-hot-loader'

setConfig({
  ignoreSFC: true,
  pureSFC: true,
  pureRender: true,
})

class App extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        <input />
        <h1 style={{ color: 'blue' }}>Hello, React!</h1>
      </div>
    )
  }
}

// tslint:disable-next-line:no-default-export
export default hot(module)(App)
