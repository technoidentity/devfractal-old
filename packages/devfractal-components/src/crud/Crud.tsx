import { Mixed, TypeOf } from 'io-ts'
import React from 'react'
import { Route, Switch } from 'react-router'
import {
  APIRepository,
  components as comps,
  ComponentsResult,
  Paths,
  paths as ps,
  Section,
} from '../lib'

export interface CrudProps<RT extends Mixed, ID extends keyof TypeOf<RT>> {
  readonly api: APIRepository<RT, ID>
  readonly basePath: string
  readonly paths?: Paths
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
