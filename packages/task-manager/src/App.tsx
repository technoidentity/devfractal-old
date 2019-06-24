import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {
  CreateTaskRoute,
  EditTaskRoute,
  LoginRoute,
  TaskListRoute,
} from './Routes'

// export const App = () => {
//   return (
//     <Async asyncFn={getData}>
//       {({ error, data }) => {
//         if (error) {
//           return <h1>error...</h1>
//         } else if (data) {
//           return <TaskList taskList={data} />
//         } else {
//           return <h1>is Loading....</h1>
//         }
//       }}
//     </Async>
//   )
// }

export const App: React.FC = () => (
  <Router>
    <Route exact path="/" component={LoginRoute} />
    <Route exact path="/tasks" component={TaskListRoute} />
    <Route path="/add" component={CreateTaskRoute} />
    <Route path="/edit/:id" component={EditTaskRoute} />
  </Router>
)
