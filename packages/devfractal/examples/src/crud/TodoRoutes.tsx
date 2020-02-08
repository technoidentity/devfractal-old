import { components, paths } from 'stp-crud'
import { Route, SimpleRedirect, Switch } from 'stp-router'
import React from 'react'
import { inMemoryAPI } from './inMemoryAPI'
import { TodoRT } from './types'

const resource: string = 'todos'
const basePath: string = '/crud'

const { Create, List, Edit, View } = components({
  basePath,
  id: 'id',
  api: inMemoryAPI,
  value: TodoRT,
  resource,
})

export const TodoRoutes: React.FC = () => {
  // @TODO: It should be /crud
  const { create, list, edit, view } = paths(resource, basePath)
  return (
    <>
      <SimpleRedirect exact from="/crud" to="/crud/todos" />
      <Switch>
        <Route exact path={create} component={Create} />
        <Route exact path={edit} component={Edit} />
        <Route exact path={view} component={View} />
        <Route exact path={list} component={List} />
      </Switch>
    </>
  )
}

// import React from 'react'
// import { api, Crud, Section, SimpleRedirect } from 'stp-ui'
// import { TodoRT } from './types'

// const resource: string = 'todos'
// const basePath: string = '/crud'
// const baseURL: string = 'http://localhost:3000'

// export const TodoRoutes: React.FC = () => {
//   // tslint:disable-next-line: typedef
//   const todoAPI = api({ baseURL, value: TodoRT, id: 'id', resource })

//   return (
//     <Section>
//       <SimpleRedirect exact from="/crud" to="/crud/todos" />
//       <Crud api={todoAPI} basePath={basePath} />
//     </Section>
//   )
// }
