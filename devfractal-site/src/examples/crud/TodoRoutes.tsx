export const abcdef: number = 10

// import React from 'react'
// import { Route, Switch } from 'react-router'
// import {
//   components,
//   paths,
//   Section,
//   SimpleRedirect,
// } from 'technoidentity-devfractal'
// import { inMemoryAPI } from './inMemoryAPI'
// import { TodoRT } from './types'

// const resource: string = 'todos'
// const basePath: string = '/crud'

// const { Create, List, Edit, View } = components({
//   basePath,
//   id: 'id',
//   api: inMemoryAPI,
//   value: TodoRT,
//   resource,
// })

// export const TodoRoutes: React.FC = () => {
//   // @TODO: It should be /crud
//   const { create, list, edit, view } = paths(resource, basePath)
//   return (
//     <Section>
//       <SimpleRedirect exact from="/crud" to="/crud/todos" />
//       <Switch>
//         <Route exact path={create} component={Create} />
//         <Route exact path={edit} component={Edit} />
//         <Route exact path={view} component={View} />
//         <Route exact path={list} component={List} />
//       </Switch>
//     </Section>
//   )
// }
