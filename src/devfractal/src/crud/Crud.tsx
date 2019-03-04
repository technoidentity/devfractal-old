import { Props } from 'io-ts'
import React from 'react'
import { Route, Switch } from 'react-router'
import { Section } from '../lib'
import {
  APIRepository,
  components as comps,
  ComponentsResult,
  Paths,
  paths as ps,
} from './internal'

export interface CrudProps<T extends Props, ID extends keyof T> {
  readonly basePath: string
  readonly api: APIRepository<T, ID>
  readonly id: ID
  readonly paths?: Paths
  readonly components?: ComponentsResult
}

export function Crud<T extends Props, ID extends keyof T>({
  basePath,
  api,
  id,
  paths = ps(api.resource, basePath),
  components = comps<T, ID>({ api, basePath, id }),
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
