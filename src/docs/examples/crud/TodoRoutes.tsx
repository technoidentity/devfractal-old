import React from 'react'
import { Route, Switch } from 'react-router'
import { components, paths, Section, SimpleRedirect } from '../devfractal'
import { InMemoryAPI } from './todoAPI'
import { TodoValue } from './types'

const resource: string = 'todos'
const basePath: string = '/crud'

const { Create, List, Edit, View } = components({
  basePath,
  id: 'id',
  api: InMemoryAPI,
  value: TodoValue,
  resource,
})

export const TodoRoutes: React.FunctionComponent = () => {
  // @TODO: It should be /crud
  const { create, list, edit, view } = paths(resource, basePath)
  return (
    <Section>
      <SimpleRedirect exact from="/crud" to="/crud/todos" />
      <Switch>
        <Route exact path={create} component={Create} />
        <Route exact path={edit} component={Edit} />
        <Route exact path={view} component={View} />
        <Route exact path={list} component={List} />
      </Switch>
    </Section>
  )
}
