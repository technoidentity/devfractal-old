import { FormikHelpers } from 'formik'
import React from 'react'
import { SafeRoute } from 'srtp-core'
import { Post } from 'srtp-crud'
import { ObjC, Props, TypeOf } from 'srtp-utils'
import { FirstoreAPI } from './firestoreRest'

export interface FSCreateProps<
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
    ): Promise<void>
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
    <SafeRoute path={path} render={() => <Children {...props} />} />
  ) : (
    <Children {...props} />
  )
}
