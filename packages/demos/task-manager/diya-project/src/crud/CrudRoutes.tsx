import { Mixed, TypeOf } from 'io-ts'
import React from 'react'
import {
  API,
  Get,
  Query,
  SafeRoute as Route,
  SimpleGetComponentProps,
  SimplePost,
  SimplePut,
  SimplePutComponentProps,
} from 'technoidentity-devfractal'
import { HasProps } from 'technoidentity-utils'
import { ClientQuery } from '../common'
import { paths as resPaths } from '../crud'
import { useQuery } from './useQuery'

interface RoutesProps<Spec extends Mixed, ID extends keyof TypeOf<Spec>> {
  readonly api: API<Spec & HasProps, ID>
  readonly resource: string
  readonly formComponent: React.FC<SimplePutComponentProps<TypeOf<Spec>>>
  readonly listComponent: React.FC<SimpleGetComponentProps<TypeOf<Spec>>>
  readonly paths?: ReturnType<typeof resPaths>
  readonly redirectPath?: string
}

interface GetRouteProps<Spec extends Mixed, ID extends keyof TypeOf<Spec>> {
  readonly api: API<Spec & HasProps, ID>
  readonly component: React.FC<SimpleGetComponentProps<TypeOf<Spec>>>
  readonly path: string
}

function GetRoute<Spec extends Mixed, ID extends keyof TypeOf<Spec>>({
  api,
  component: Component,
  path,
}: GetRouteProps<Spec, ID>): JSX.Element {
  const { page, limit } = useQuery(ClientQuery)

  const query: Query<TypeOf<Spec>> = {
    range: { current: page || 1, limit: limit || 10 },
  }

  const asyncFn = (query: Query<TypeOf<Spec>>) => api.list(query)

  return (
    <Route
      path={path}
      render={() => (
        <Get asyncFn={asyncFn} deps={[query]}>
          {data => <Component data={data} />}
        </Get>
      )}
    />
  )
}

export function CrudRoutes<Spec extends Mixed, ID extends keyof TypeOf<Spec>>({
  api,
  resource,
  listComponent,
  formComponent,
  paths: { edit, create, list } = resPaths(resource),
  redirectPath = list,
}: RoutesProps<Spec, ID>): JSX.Element {
  return (
    <>
      <SimplePut
        path={edit}
        api={api}
        component={formComponent}
        redirectPath={redirectPath}
      />

      <GetRoute api={api} component={listComponent} path={list} />
      {/* <SimpleGet api={api} component={listComponent} path={list} /> */}

      <SimplePost
        path={create}
        redirectPath={redirectPath}
        api={api}
        component={formComponent}
      />
    </>
  )
}
