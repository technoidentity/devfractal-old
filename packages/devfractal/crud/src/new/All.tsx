import { API, APIQuery } from 'devfractal-api'
import { Route } from 'devfractal-router'
import { Get } from 'devfractal-ui-api'
import { Mixed, string, TypeOf } from 'io-ts'
import React from 'react'

// tslint:disable no-unbound-method

export interface AllComponentProps<T> {
  readonly data: ReadonlyArray<T>
  // fetchAgain(): void
}

export interface AllProps<Spec extends Mixed, ID extends keyof TypeOf<Spec>> {
  readonly api: API<Spec, ID>
  readonly path: string
  readonly query?: string | APIQuery<TypeOf<Spec>>
  readonly list: React.FC<AllComponentProps<TypeOf<Spec>>>
}

function AllChildren<Spec extends Mixed, ID extends keyof TypeOf<Spec>>({
  api,
  query,
  list: Component,
}: Omit<AllProps<Spec, ID>, 'path'>): JSX.Element {
  return (
    <Get
      asyncFn={async () => {
        if (query && !string.is(query)) {
          return api.list(query)
        } else {
          return api.many({ query })
        }
      }}
    >
      {data => <Component data={data} />}
    </Get>
  )
}
export function All<Spec extends Mixed, ID extends keyof TypeOf<Spec>>({
  path,
  ...props
}: AllProps<Spec, ID>): JSX.Element {
  return path ? (
    <Route path={path} render={() => <AllChildren {...props} />} />
  ) : (
    <AllChildren {...props} />
  )
}
