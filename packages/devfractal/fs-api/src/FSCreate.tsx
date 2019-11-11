import { Route } from 'devfractal-router'
import { Post, SubmitAction } from 'devfractal-ui-api'
import React from 'react'
import { ObjC, Props, TypeOf } from 'technoidentity-utils'
import { FirstoreAPI } from './firestoreRest'

export interface FSCreateProps<
  Opt extends Props,
  Req extends Props,
  ID extends keyof TypeOf<ObjC<Opt, Req>>
> {
  readonly path: string
  readonly redirectTo?: string
  readonly form: React.FC<{
    readonly onSubmit: SubmitAction<TypeOf<ObjC<Opt, Req>>>
  }>
  readonly api: FirstoreAPI<Opt, Req, ID>
}

function Children<
  Opt extends Props,
  Req extends Props,
  ID extends keyof TypeOf<ObjC<Opt, Req>>
>({
  api,
  redirectTo,
  form: Component,
}: Omit<FSCreateProps<Opt, Req, ID>, 'path'>): JSX.Element {
  return (
    <Post component={Component} onPost={api.create} redirectTo={redirectTo} />
  )
}

export function FSCreate<
  Opt extends Props,
  Req extends Props,
  ID extends keyof TypeOf<ObjC<Opt, Req>>
>({ path, ...props }: FSCreateProps<Opt, Req, ID>): JSX.Element {
  return path ? (
    <Route path={path} render={() => <Children {...props} />} />
  ) : (
    <Children {...props} />
  )
}
