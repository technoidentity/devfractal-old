import React from 'react'
import { APIComponents } from 'srtp-core'
import { UIComponents } from 'srtp-ui'
import { TaskManager } from './TaskManager'
// export const App: React.FC = () => (
//   <SafeRouter variant="browser">
//     <SafeRoute exact path="/" component={TodoListRoute} />
//     <SafeRoute exact path="/todos/add" component={CreateTodoRoute} />
//     <SafeRoute exact path="/todos/:id/edit" component={EditTodoRoute} />
//   </SafeRouter>
// )

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

export const App: React.FC = () => (
  <APIComponents.Provider value={UIComponents}>
    <TaskManager />
  </APIComponents.Provider>
)
