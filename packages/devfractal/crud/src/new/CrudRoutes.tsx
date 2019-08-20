import { API, APIQuery } from 'devfractal-api'
import { Route, useLocation } from 'devfractal-router'
import {
  Get,
  SimpleGetComponentProps,
  SimplePost,
  SimplePut,
  SimplePutComponentProps,
} from 'devfractal-ui-api'
import { Mixed, record, string, TypeOf } from 'io-ts'
import { IntFromString } from 'io-ts-types/lib/IntFromString'
import { parse } from 'query-string'
import React from 'react'
import { cast, HasProps, opt } from 'technoidentity-utils'
import { paths as resPaths } from './common'

// tslint:disable-next-line: typedef
export const ClientQuery = opt({
  page: IntFromString,
  limit: IntFromString,
  asc: string,
  desc: string,
})

interface RoutesProps<Spec extends Mixed, ID extends keyof TypeOf<Spec>> {
  readonly api: API<Spec & HasProps, ID>
  readonly form: React.FC<SimplePutComponentProps<TypeOf<Spec>>>
  readonly list: React.FC<SimpleGetComponentProps<TypeOf<Spec>>>
  readonly paths?: ReturnType<typeof resPaths>
  readonly redirectTo?: string
  queryFn?(search: string): APIQuery<TypeOf<Spec>>
}

interface GetRouteProps<Spec extends Mixed, ID extends keyof TypeOf<Spec>> {
  readonly api: API<Spec & HasProps, ID>
  readonly component: React.FC<SimpleGetComponentProps<TypeOf<Spec>>>
  readonly path: string
  queryFn?(search: string): APIQuery<TypeOf<Spec>> | string
}

function defaultQueryFn<Spec extends Mixed>(
  search: string,
): APIQuery<TypeOf<Spec>> {
  const { page = 1, limit = 25, asc, desc } = cast(
    ClientQuery,
    cast(record(string, string), parse(search)),
  )

  return {
    range: { current: page, limit },
    asc: [asc] as any,
    desc: [desc] as any,
  }
}
function GetRoute<Spec extends Mixed, ID extends keyof TypeOf<Spec>>({
  api,
  component: Component,
  path,
  queryFn = defaultQueryFn,
}: GetRouteProps<Spec, ID>): JSX.Element {
  const { search } = useLocation()

  // tslint:disable-next-line: typedef
  const query = queryFn(search)

  async function asyncFn(
    query: APIQuery<TypeOf<Spec>>,
  ): Promise<ReadonlyArray<Spec>> {
    return api.list(query)
  }

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
  list: listComponent,
  form: formComponent,
  paths: { edit, create, list } = resPaths(api.resource),
  redirectTo = list,
}: RoutesProps<Spec, ID>): JSX.Element {
  return (
    <>
      <SimplePut
        path={edit}
        api={api}
        component={formComponent}
        redirectTo={redirectTo}
      />

      <GetRoute api={api} component={listComponent} path={list} />
      {/* <SimpleGet api={api} component={listComponent} path={list} /> */}

      <SimplePost
        path={create}
        redirectTo={redirectTo}
        api={api}
        component={formComponent}
      />
    </>
  )
}
