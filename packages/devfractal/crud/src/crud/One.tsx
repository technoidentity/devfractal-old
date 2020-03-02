import React from 'react'
import { API, SafeRoute } from 'technoidentity-core'
import { ObjC, Props, TypeOf } from 'technoidentity-utils'
import { Get } from '../api'

export interface OneComponentProps<T> {
  readonly data: T
  // fetchAgain(): void
}

export interface OneProps<
  Opt extends Props,
  Req extends Props,
  ID extends keyof TypeOf<ObjC<Opt, Req>>
> {
  readonly api: API<Opt, Req, ID>
  readonly path: string
  readonly id: TypeOf<ObjC<Opt, Req>>[ID]
  readonly view: React.FC<OneComponentProps<TypeOf<ObjC<Opt, Req>>>>
}

function Children<
  Opt extends Props,
  Req extends Props,
  ID extends keyof TypeOf<ObjC<Opt, Req>>
>({
  api,
  id,
  view: Component,
}: Omit<OneProps<Opt, Req, ID>, 'path'>): JSX.Element {
  return (
    <Get asyncFn={() => api.get(id)}>{data => <Component data={data} />}</Get>
  )
}

export function One<
  Opt extends Props,
  Req extends Props,
  ID extends keyof TypeOf<ObjC<Opt, Req>>
>({ path, ...props }: OneProps<Opt, Req, ID>): JSX.Element {
  return path ? (
    <SafeRoute path={path} render={() => <Children {...props} />} />
  ) : (
    <Children {...props} />
  )
}