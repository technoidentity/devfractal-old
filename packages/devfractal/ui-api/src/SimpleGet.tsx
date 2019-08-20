import { API, APIQuery } from 'devfractal-api'
import { Route } from 'devfractal-router'
import { Mixed, TypeOf } from 'io-ts'
import React from 'react'
import { Get } from './Get'

// tslint:disable no-unbound-method

export interface SimpleGetComponentProps<T> {
  readonly data: ReadonlyArray<T>
  // fetchAgain(): void
}

export interface SimpleGetProps<
  Spec extends Mixed,
  ID extends keyof TypeOf<Spec>
> {
  readonly api: API<Spec, ID>
  readonly path: string
  readonly query?: APIQuery<TypeOf<Spec>>
  readonly component: React.FC<SimpleGetComponentProps<TypeOf<Spec>>>
}

function SimpleGetChildren<Spec extends Mixed, ID extends keyof TypeOf<Spec>>({
  api,
  query,
  component: Component,
}: Omit<SimpleGetProps<Spec, ID>, 'path'>): JSX.Element {
  return (
    <Get asyncFn={async () => (query ? api.list(query) : api.many())}>
      {data => <Component data={data} />}
    </Get>
  )
}
export function SimpleGet<Spec extends Mixed, ID extends keyof TypeOf<Spec>>({
  path,
  ...props
}: SimpleGetProps<Spec, ID>): JSX.Element {
  return path ? (
    <Route path={path} render={() => <SimpleGetChildren {...props} />} />
  ) : (
    <SimpleGetChildren {...props} />
  )
}
