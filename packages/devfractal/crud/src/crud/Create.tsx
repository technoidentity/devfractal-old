import { FormikHelpers } from 'formik'
import React from 'react'
import { API, SafeRoute } from 'srtp-core'
import { ObjC, Props, TypeOf } from 'srtp-utils'
import { Post } from '../api'

// tslint:disable no-unbound-method

export interface CreateProps<Opt extends Props, Req extends Props> {
  readonly path: string
  readonly redirectTo?: string
  readonly form: React.FC<{
    onSubmit(
      values: TypeOf<ObjC<Opt, Req>>,
      actions: FormikHelpers<TypeOf<ObjC<Opt, Req>>>,
    ): Promise<void> // SubmitAction<TypeOf<ObjC<Opt, Req>>>
  }>
  readonly api: API<Opt, Req>
}

function Children<Opt extends Props, Req extends Props>({
  api,
  redirectTo,
  form: Component,
}: Omit<CreateProps<Opt, Req>, 'path'>): JSX.Element {
  return (
    <Post component={Component} onPost={api.create} redirectTo={redirectTo} />
  )
}

export function Create<Opt extends Props, Req extends Props>({
  path,
  ...props
}: CreateProps<Opt, Req>): JSX.Element {
  return path ? (
    <SafeRoute path={path} render={() => <Children {...props} />} />
  ) : (
    <Children {...props} />
  )
}
