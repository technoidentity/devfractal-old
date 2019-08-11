import { Mixed, TypeOf } from 'io-ts'
import React from 'react'
import { API, Get, SafeRoute as Route } from 'technoidentity-devfractal'

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
  readonly component: React.FC<SimpleGetComponentProps<TypeOf<Spec>>>
}

function SimpleGetChildren<Spec extends Mixed, ID extends keyof TypeOf<Spec>>({
  api,
  component: Component,
}: Omit<SimpleGetProps<Spec, ID>, 'path'>): JSX.Element {
  return (
    <Get asyncFn={() => api.many()}>{data => <Component data={data} />}</Get>
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
