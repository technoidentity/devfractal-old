import { API } from '@stp/api'
import { Route, useParams } from '@stp/router'
import { Put, SubmitAction } from '@stp/ui-api'
import { getProp, ObjC, Props, string, type, TypeOf } from '@stp/utils'
import React from 'react'

// tslint:disable no-unbound-method

export interface EditComponentProps<T> {
  readonly initial?: T
  readonly onSubmit: SubmitAction<T>
}

export interface EditProps<
  Opt extends Props,
  Req extends Props,
  ID extends keyof TypeOf<ObjC<Opt, Req>>
> {
  readonly api: API<Opt, Req, ID>
  readonly path: string
  readonly redirectTo?: string
  readonly form: React.FC<EditComponentProps<TypeOf<ObjC<Opt, Req>>>>
}

function Children<
  Opt extends Props,
  Req extends Props,
  ID extends keyof TypeOf<ObjC<Opt, Req>>
>({
  api,
  redirectTo,
  form: Component,
}: Omit<EditProps<Opt, Req, ID>, 'path'>): JSX.Element {
  const idPropSpec: TypeOf<ObjC<Opt, Req>>[ID] = getProp(api.spec, api.idKey)
  if (idPropSpec === undefined) {
    throw new Error(`${api.idKey} not defined`)
  }

  const { params } = useParams(type({ [api.idKey]: string }))

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

export function Edit<
  Opt extends Props,
  Req extends Props,
  ID extends keyof TypeOf<ObjC<Opt, Req>>
>({ path, ...props }: EditProps<Opt, Req, ID>): JSX.Element {
  return path ? (
    <Route path={path} render={() => <Children {...props} />} />
  ) : (
    <Children {...props} />
  )
}
