import { Route, Switch } from 'devfractal-router'
import React from 'react'
import { Mixed, TypeOf } from 'technoidentity-utils'
import { APIRepository } from './api'
import { components as comps, ComponentsResult } from './Components'
import { paths as ps } from './new'

export interface CrudProps<RT extends Mixed, ID extends keyof TypeOf<RT>> {
  readonly api: APIRepository<RT, ID>
  readonly basePath: string
  readonly paths?: ReturnType<typeof ps>
  readonly components?: ComponentsResult
}

export function Crud<RT extends Mixed, ID extends keyof TypeOf<RT>>({
  basePath,
  api,
  paths = ps(api.resource, basePath),
  components = comps<RT, ID>({ api, basePath }),
}: CrudProps<RT, ID>): JSX.Element {
  const { create, list, edit, view } = paths
  const { Create, List, Edit, View } = components

  return (
    <Switch>
      <Route path={create} component={Create} />
      <Route path={edit} component={Edit} />
      <Route path={view} component={View} />
      <Route path={list} component={List} />
    </Switch>
  )
}
