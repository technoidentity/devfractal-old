import React from 'react'
import { Router, SafeRoute as Route } from 'technoidentity-devfractal'
import { CreateTodoRoute } from './demo/13.CreateTodo'
import { TodoListRoute } from './demo/15.TodoListRoute'
import { EditTodoRoute } from './demo/16.EditTodo'

export const App: React.FC = () => (
  <Router variant="browser">
    <Route exact path="/" component={TodoListRoute} />
    <Route exact path="/todos/add" component={CreateTodoRoute} />
    <Route exact path="/todos/:id/edit" component={EditTodoRoute} />
  </Router>
)

// export const App: React.FC = () => <h1>Hello, World</h1>

// export const App = () => <TodoApp />

// export const App = () => (
//   <BrowserRouter>
//     <SimpleCrud
//       baseURL="http://localhost:3000"
//       resource="todos"
//       id="id"
//       value={Todo}
//     />
//   </BrowserRouter>
// )

// const initial = { username: '', password: '' }

// export const App = () => {
//   const Typed = typedForm<typeof initial>()

//   return (
//     <Section>
//       <Typed.Form initialValues={initial}>
//         <Typed.Text name="username" />
//         <Typed.Password name="password" />
//         <Simple.FormButtons />
//       </Typed.Form>
//     </Section>
//   )
// }

// export const App: React.FC = () => <TaskManager />
