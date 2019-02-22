import { Props } from 'io-ts'
import React from 'react'
import { Route, Switch } from 'react-router'
import { Section } from '../layout'
import { ApiRepository } from './api'
import {
  Paths,
  paths as ps,
  RouteComponents,
  RouteComponentsResult,
} from './Routes'

export type CrudProps<T extends Props & { readonly id: any }> = Readonly<{
  readonly basePath: string
  readonly api: ApiRepository<T>
  readonly paths?: Paths
  readonly components?: RouteComponentsResult
}>

export function Crud<T extends { id: any }>({
  basePath,
  api,
  paths = ps(api.resource),
  components = RouteComponents({ api }, basePath),
}: CrudProps<T>): JSX.Element {
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
