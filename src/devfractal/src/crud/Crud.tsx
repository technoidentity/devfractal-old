import { Props } from 'io-ts'
import React from 'react'
import { Route, Switch } from 'react-router'
import { Section } from '../lib'
import {
  APIRepository,
  Paths,
  paths as ps,
  routeComponents,
  RouteComponentsResult,
} from './internal'

export type CrudProps<T extends Props, ID extends keyof T> = Readonly<{
  readonly basePath: string
  readonly api: APIRepository<T, ID>
  readonly paths?: Paths
  readonly components?: RouteComponentsResult
}>

export function Crud<T extends Props, ID extends keyof T>({
  basePath,
  api,
  paths = ps(api.resource, basePath),
  components = routeComponents<T, ID>({ api, basePath }),
}: CrudProps<T, ID>): JSX.Element {
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
