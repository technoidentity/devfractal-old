import { API } from 'devfractal-api'
import { Route } from 'devfractal-router'
import { Get } from 'devfractal-ui-api'
import React from 'react'
import { Mixed, TypeOf } from 'technoidentity-spec'

export interface OneComponentProps<T> {
  readonly data: T
  // fetchAgain(): void
}

export interface OneProps<Spec extends Mixed, ID extends keyof TypeOf<Spec>> {
  readonly api: API<Spec, ID>
  readonly path: string
  readonly id: ID
  readonly view: React.FC<OneComponentProps<TypeOf<Spec>>>
}

function Children<Spec extends Mixed, ID extends keyof TypeOf<Spec>>({
  api,
  id,
  view: Component,
}: Omit<OneProps<Spec, ID>, 'path'>): JSX.Element {
  return (
    <Get asyncFn={() => api.get(id)}>{data => <Component data={data} />}</Get>
  )
}

export function One<Spec extends Mixed, ID extends keyof TypeOf<Spec>>({
  path,
  ...props
}: OneProps<Spec, ID>): JSX.Element {
  return path ? (
    <Route path={path} render={() => <Children {...props} />} />
  ) : (
    <Children {...props} />
  )
}
