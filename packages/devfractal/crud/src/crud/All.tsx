import { parse, stringify } from 'query-string'
import React from 'react'
import { useHistory, useLocation } from 'react-router'
import { API, APIQuery, Page, SafeRoute } from 'technoidentity-core'
import {
  cast,
  IntFromString,
  ObjC,
  opt,
  Props,
  record,
  string,
  TypeOf,
} from 'technoidentity-utils'
import { Get } from '../api'

// tslint:disable-next-line: typedef
export const ClientQuery = opt({
  page: IntFromString,
  limit: IntFromString,
  asc: string,
  desc: string,
})

export interface AllComponentProps<T> {
  readonly data: readonly T[]
  readonly page: number
  onPageChange(page: number): void
}

interface ChildrenProps<
  Opt extends Props,
  Req extends Props,
  ID extends keyof TypeOf<ObjC<Opt, Req>>
> {
  readonly api: API<Opt, Req, ID>
  readonly list: React.FC<AllComponentProps<TypeOf<ObjC<Opt, Req>>>>
  queryFn?(search: string): APIQuery<TypeOf<ObjC<Opt, Req>>>
}

function defaultQueryFn<Opt extends Props, Req extends Props>(
  search: string,
): APIQuery<TypeOf<ObjC<Opt, Req>>> {
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

function Children<
  Opt extends Props,
  Req extends Props,
  ID extends keyof TypeOf<ObjC<Opt, Req>>
>({
  api,
  list: Component,
  queryFn = defaultQueryFn,
}: ChildrenProps<Opt, Req, ID>): JSX.Element {
  const { pathname, search } = useLocation()
  const { push } = useHistory()

  // tslint:disable-next-line: typedef
  const query = queryFn(search)

  async function asyncFn(
    query: APIQuery<TypeOf<ObjC<Opt, Req>>>,
  ): Promise<ReadonlyArray<TypeOf<ObjC<Opt, Req>>>> {
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
  readonly data: readonly T[]
  // fetchAgain(): void
}

export interface AllProps<
  Opt extends Props,
  Req extends Props,
  ID extends keyof TypeOf<ObjC<Opt, Req>>
> extends ChildrenProps<Opt, Req, ID> {
  readonly path: string
}

export function All<
  Opt extends Props,
  Req extends Props,
  ID extends keyof TypeOf<ObjC<Opt, Req>>
>({ path, ...props }: AllProps<Opt, Req, ID>): JSX.Element {
  return path ? (
    <SafeRoute path={path} render={() => <Children {...props} />} />
  ) : (
    <Children {...props} />
  )
}
