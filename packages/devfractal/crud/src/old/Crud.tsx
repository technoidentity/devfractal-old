import React from 'react'
import { Switch } from 'react-router'
import { SafeRoute } from 'technoidentity-core'
import { Mixed, TypeOf } from 'technoidentity-utils'
import { paths as ps } from '../crud'
import { APIRepository } from './apiFn'
import { components as comps, ComponentsResult } from './Components'

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
      <SafeRoute path={create} component={Create} />
      <SafeRoute path={edit} component={Edit} />
      <SafeRoute path={view} component={View} />
      <SafeRoute path={list} component={List} />
    </Switch>
  )
}
