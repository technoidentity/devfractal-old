import React from 'react'
import { Switch } from 'react-router'
import { SafeRoute, SimpleRedirect } from 'technoidentity-core'
import { components, paths } from 'technoidentity-crud'
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
        <SafeRoute exact path={create} component={Create} />
        <SafeRoute exact path={edit} component={Edit} />
        <SafeRoute exact path={view} component={View} />
        <SafeRoute exact path={list} component={List} />
      </Switch>
    </>
  )
}

// import React from 'react'
// import { api, Crud, Section, SimpleRedirect } from 'technoidentity-ui'
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
