import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CreateFormRoute, EditTaskFormRoute, TaskListRoute } from './Routes'

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

export const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={TaskListRoute} />
      <Route path="/add" component={CreateFormRoute} />
      <Route path="/edit/:id" component={EditTaskFormRoute} />
    </Router>
  )
}
