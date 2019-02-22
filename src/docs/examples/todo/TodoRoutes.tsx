import React from 'react'
import { Route, Switch } from 'react-router'
import { Section } from 'technoidentity-devfractal'
import { paths, RouteComponents } from '../devfractal'
import { InMemoryAPI } from './todoAPI'
import { TodoValue } from './types'

const resource: string = 'todos'

const { Create, List, Edit, View } = RouteComponents({
  api: InMemoryAPI,
  value: TodoValue,
  resource,
})

export const TodoRoutes: React.SFC = () => {
  const { create, list, edit, view } = paths(resource)

  return (
    <Section>
      <Switch>
        <Route path={create} component={Create} />
        <Route path={edit} component={Edit} />
        <Route path={view} component={View} />
        <Route path={list} component={List} />
      </Switch>
    </Section>
  )
}
