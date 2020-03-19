import React from 'react'
import { API, SafeRoute, useParamsSafe } from 'technoidentity-core'
import { ObjC, pickID, Props, TypeOf } from 'technoidentity-utils'
import { Put, SubmitAction } from '../api'

// tslint:disable no-unbound-method

export interface EditComponentProps<T> {
  readonly initial?: T
  readonly onSubmit: SubmitAction<T>
}

export interface EditProps<Opt extends Props, Req extends Props> {
  readonly api: API<Opt, Req>
  readonly path: string
  readonly redirectTo?: string
  readonly form: React.FC<EditComponentProps<TypeOf<ObjC<Opt, Req>>>>
}

function Children<Opt extends Props, Req extends Props>({
  api,
  redirectTo,
  form: Component,
}: Omit<EditProps<Opt, Req>, 'path'>): JSX.Element {
  return (
    <Put
      id={useParamsSafe(pickID(api.spec))}
      doGet={api.get}
      onPut={api.replace}
      component={Component}
      redirectTo={redirectTo}
    />
  )
}

export function Edit<Opt extends Props, Req extends Props>({
  path,
  ...props
}: EditProps<Opt, Req>): JSX.Element {
  return path ? (
    <SafeRoute path={path} render={() => <Children {...props} />} />
  ) : (
    <Children {...props} />
  )
}
