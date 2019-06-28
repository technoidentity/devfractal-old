import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {
  CreateTaskRoute,
  EditTaskRoute,
  LoginRoute,
  SignupFormRoute,
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
    <Route exact path="/" component={SignupFormRoute} />
    <Route exact path="/login" component={LoginRoute} />
    <Route exact path="/tasks" component={TaskListRoute} />
    <Route path="/add" component={CreateTaskRoute} />
    <Route path="/edit/:id" component={EditTaskRoute} />
  </Router>
)

// export const App: React.FC = () => {
//   const postUser = async (data: any) => {
//     return axios
//       .post('http://localhost:9999/users', data)
//       .then(data => console.log(data))
//       .catch(err => console.log({ error: err.response.data.message }))
//   }
//   return <LoginForm onLogin={postUser} />
// }

// export const App: React.FC = () => {
//   const [serverError, setServerError] = React.useState<string | undefined>(
//     undefined,
//   )
//   const postTask = async (data: any) => {
//     return await axios
//       .post('http://localhost:9999/tasks', data)
//       .then(data => setServerError(undefined))
//       .catch(err => setServerError(err.response.data.message))
//   }
//   return (
//     <>
//       {serverError && (
//         <article className="message is-danger">
//           <div className="message-body">{serverError}</div>
//         </article>
//       )}
//       <TaskForm onSubmit={postTask} />
//     </>
//   )
// }
