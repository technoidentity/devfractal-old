import React from 'react'
import { API, SafeRoute } from 'technoidentity-core'
import { IDProps, ObjC, Props, TypeC, TypeOf } from 'technoidentity-utils'
import { Get } from '../api'

export interface OneComponentProps<T> {
  readonly data: T
  // fetchAgain(): void
}

export interface OneProps<Opt extends Props, Req extends Props> {
  readonly api: API<Opt, Req>
  readonly path: string
  readonly id: TypeOf<TypeC<IDProps<Opt, Req>>>
  readonly view: React.FC<OneComponentProps<TypeOf<ObjC<Opt, Req>>>>
}

function Children<Opt extends Props, Req extends Props>({
  api,
  id,
  view: Component,
}: Omit<OneProps<Opt, Req>, 'path'>): JSX.Element {
  return (
    <Get asyncFn={() => api.get(id)}>{data => <Component data={data} />}</Get>
  )
}

export function One<Opt extends Props, Req extends Props>({
  path,
  ...props
}: OneProps<Opt, Req>): JSX.Element {
  return path ? (
    <SafeRoute path={path} render={() => <Children<Opt, Req> {...props} />} />
  ) : (
    <Children<Opt, Req> {...props} />
  )
}
