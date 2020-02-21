import React from 'react'
import { SafeRoute, useParamsSafe } from 'technoidentity-core'
import { Put, SubmitAction } from 'technoidentity-crud'
import {
  getProp,
  ObjC,
  Props,
  string,
  type,
  TypeOf,
} from 'technoidentity-utils'
import { FirstoreAPI } from './firestoreRest'

// tslint:disable no-unbound-method

export interface FSEditComponentProps<T> {
  readonly initial?: T
  readonly onSubmit: SubmitAction<T>
}

export interface FSEditProps<
  Opt extends Props,
  Req extends Props,
  ID extends keyof TypeOf<ObjC<Opt, Req>>
> {
  readonly api: FirstoreAPI<Opt, Req, ID>
  readonly path: string
  readonly redirectTo?: string
  readonly form: React.FC<FSEditComponentProps<TypeOf<ObjC<Opt, Req>>>>
}

function Children<
  Opt extends Props,
  Req extends Props,
  ID extends keyof TypeOf<ObjC<Opt, Req>>
>({
  api,
  redirectTo,
  form: Component,
}: Omit<FSEditProps<Opt, Req, ID>, 'path'>): JSX.Element {
  const idPropSpec: TypeOf<ObjC<Opt, Req>>[ID] = getProp(api.spec, api.idKey)
  if (idPropSpec === undefined) {
    throw new Error(`${api.idKey} not defined`)
  }

  // tslint:disable-next-line: typedef
  const params = useParamsSafe(type({ [api.idKey]: string }))

  return (
    <Put
      // @TODO: possible to fix this casting nonsense?
      id={params[api.idKey as string] as any}
      doGet={api.get}
      onPut={api.replace}
      component={Component}
      redirectTo={redirectTo}
    />
  )
}

export function FSEdit<
  Opt extends Props,
  Req extends Props,
  ID extends keyof TypeOf<ObjC<Opt, Req>>
>({ path, ...props }: FSEditProps<Opt, Req, ID>): JSX.Element {
  return path ? (
    <SafeRoute path={path} render={() => <Children {...props} />} />
  ) : (
    <Children {...props} />
  )
}
