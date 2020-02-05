import { API } from '@stp/core'
import { Route } from '@stp/router'
import { Post } from '@stp/ui-api'
import { ObjC, Props, TypeOf } from '@stp/utils'
import { FormikHelpers } from 'formik'
import React from 'react'

// tslint:disable no-unbound-method

export interface CreateProps<
  Opt extends Props,
  Req extends Props,
  ID extends keyof TypeOf<ObjC<Opt, Req>>
> {
  readonly path: string
  readonly redirectTo?: string
  readonly form: React.FC<{
    onSubmit(
      values: TypeOf<ObjC<Opt, Req>>,
      actions: FormikHelpers<TypeOf<ObjC<Opt, Req>>>,
    ): Promise<void> // SubmitAction<TypeOf<ObjC<Opt, Req>>>
  }>
  readonly api: API<Opt, Req, ID>
}

function Children<
  Opt extends Props,
  Req extends Props,
  ID extends keyof TypeOf<ObjC<Opt, Req>>
>({
  api,
  redirectTo,
  form: Component,
}: Omit<CreateProps<Opt, Req, ID>, 'path'>): JSX.Element {
  return (
    <Post component={Component} onPost={api.create} redirectTo={redirectTo} />
  )
}

export function Create<
  Opt extends Props,
  Req extends Props,
  ID extends keyof TypeOf<ObjC<Opt, Req>>
>({ path, ...props }: CreateProps<Opt, Req, ID>): JSX.Element {
  return path ? (
    <Route path={path} render={() => <Children {...props} />} />
  ) : (
    <Children {...props} />
  )
}
