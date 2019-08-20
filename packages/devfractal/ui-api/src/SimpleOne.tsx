import { API } from 'devfractal-api'
import { Route } from 'devfractal-router'
import { Mixed, TypeOf } from 'io-ts'
import React from 'react'
import { Get } from './Get'

// tslint:disable no-unbound-method

export interface SimpleOneComponentProps<T> {
  readonly data: T
  // fetchAgain(): void
}

export interface SimpleOneProps<
  Spec extends Mixed,
  ID extends keyof TypeOf<Spec>
> {
  readonly api: API<Spec, ID>
  readonly path: string
  readonly id: ID
  readonly component: React.FC<SimpleOneComponentProps<TypeOf<Spec>>>
}

function SimpleGetChildren<Spec extends Mixed, ID extends keyof TypeOf<Spec>>({
  api,
  id,
  component: Component,
}: Omit<SimpleOneProps<Spec, ID>, 'path'>): JSX.Element {
  return (
    <Get asyncFn={() => api.get(id)}>{data => <Component data={data} />}</Get>
  )
}
export function SimpleGet<Spec extends Mixed, ID extends keyof TypeOf<Spec>>({
  path,
  ...props
}: SimpleOneProps<Spec, ID>): JSX.Element {
  return path ? (
    <Route path={path} render={() => <SimpleGetChildren {...props} />} />
  ) : (
    <SimpleGetChildren {...props} />
  )
}
