import { API, APIQuery, Page } from 'devfractal-api'
import { Route, useHistory, useLocation } from 'devfractal-router'
import { Get } from 'devfractal-ui-api'
import { Mixed, record, string, TypeOf } from 'io-ts'
import { IntFromString } from 'io-ts-types/lib/IntFromString'
import { parse, stringify } from 'query-string'
import React from 'react'
import { cast, HasProps, opt } from 'technoidentity-utils'

// tslint:disable-next-line: typedef
export const ClientQuery = opt({
  page: IntFromString,
  limit: IntFromString,
  asc: string,
  desc: string,
})

export interface AllComponentProps<T> {
  readonly data: ReadonlyArray<T>
  readonly page: number
  onPageChange(page: number): void
}

interface ChildrenProps<Spec extends Mixed, ID extends keyof TypeOf<Spec>> {
  readonly api: API<Spec & HasProps, ID>
  readonly list: React.FC<AllComponentProps<TypeOf<Spec>>>
  queryFn?(search: string): APIQuery<TypeOf<Spec>>
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
    asc: asc ? [asc] : [],
    desc: desc ? [desc] : [],
  }
}

function Children<Spec extends Mixed, ID extends keyof TypeOf<Spec>>({
  api,
  list: Component,
  queryFn = defaultQueryFn,
}: ChildrenProps<Spec, ID>): JSX.Element {
  const { pathname, search } = useLocation()
  const { push } = useHistory()

  // tslint:disable-next-line: typedef
  const query = queryFn(search)

  async function asyncFn(
    query: APIQuery<TypeOf<Spec>>,
  ): Promise<ReadonlyArray<Spec>> {
    return query ? api.list(query) : api.many()
  }

  function handlePageChange(page: number): void {
    push(`${pathname}?${stringify({ ...query, page })}`)
  }

  const page: number =
    Page.is(query.range) && query.range.current ? query.range.current : 1

  return (
    <Get asyncFn={asyncFn} deps={[query]}>
      {data => (
        <Component data={data} page={page} onPageChange={handlePageChange} />
      )}
    </Get>
  )
}

export interface AllComponentProps<T> {
  readonly data: ReadonlyArray<T>
  // fetchAgain(): void
}

export interface AllProps<Spec extends Mixed, ID extends keyof TypeOf<Spec>>
  extends ChildrenProps<Spec, ID> {
  readonly path: string
}

export function All<Spec extends Mixed, ID extends keyof TypeOf<Spec>>({
  path,
  ...props
}: AllProps<Spec, ID>): JSX.Element {
  return path ? (
    <Route path={path} render={() => <Children {...props} />} />
  ) : (
    <Children {...props} />
  )
}
