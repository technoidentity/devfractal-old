import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
// import './01.checked'
// import './03.fake'
// import './04.empty'
// import './05.fn'
// import './06.string'
// import './07.coercions'
// import './08.complexForm'
// import './09.moderateForm'
// import './10.simpleForm'
import './demo/11.todo'
