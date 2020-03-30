// import 'bulma/css/bulma.css'
import React from 'react'
import { render } from 'react-dom'
// import { rest, SafeRouter, SimpleRedirect } from 'srtp-core'
// import { ButtonLink, Section, Simple } from 'srtp-ui'
// import { boolean, number, obj, string } from 'srtp-utils'
// import {
//   CrudRoutes,
//   CrudTable,
//   formComponent,
//   links,
//   listComponent,
// } from './new'

// tslint:disable typedef

// const Todo = obj({ id: number }, { title: string, done: boolean })

// const api = rest(Todo, 'id', 'todos', {
//   baseURL: 'http://localhost:3000',
//   withCredentials: true,
// })

// // api
// //   .many()
// //   .then(values => console.log(values))
// //   .catch(err => console.error(err))

// const TodoForm = formComponent(Todo, ({ initial, onSubmit }) => (
//   <Simple.Form initialValues={initial} onSubmit={onSubmit}>
//     <Simple.Text name="title" />
//     <Simple.Checkbox name="done" />
//     <Simple.FormButtons />
//   </Simple.Form>
// ))

// const { create: createTo, edit: editTo } = links('todos')

// const TodoList = listComponent(Todo, ({ data }) => (
//   <>
//     <ButtonLink to={createTo} variant="primary">
//       Add
//     </ButtonLink>
//     <CrudTable
//       data={data}
//       select={['title', 'done']}
//       editTo={({ id }) => editTo(id)}
//     />
//   </>
// ))

// export const App: React.FC = () => {
//   return (
//     <SafeRouter>
//       <Section>
//         <SimpleRedirect from="/" to="/todos" />
//         <CrudRoutes api={api} form={TodoForm} list={TodoList} />
//       </Section>
//     </SafeRouter>
//   )
// }

// // const App: React.FC = () => {
// //   return (
// //     <APIProvider.Provider value={UIComponents}>
// //       <h1>Hello, World</h1>
// //     </APIProvider.Provider>
// //   )
// // }

render(<h1>Hello</h1>, document.getElementById('root'))
