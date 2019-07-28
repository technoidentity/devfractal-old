// tslint:disable file-name-casing

import 'bulma/bulma.sass'
import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import ReactDOM from 'react-dom'
import { App } from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()

// import './demo/01.checked'
// import './demo/03.fake'
// import './demo/04.empty'
// import './demo/05.fn'
// import './demo/06.string'
// import './demo/07.coercions'
// import './demo/08.ComplexForm'
// import './demo/09.ModerateForm'
// import './demo/10.SimpleForm'
// import './demo/11.Todo'
// import './demo/12.TodoForm'
// import './demo/13.CreateTodo'
// import './demo/14.TodoListView'
// import './demo/15.TodoListRoute'
// import './demo/16.EditTodo'
