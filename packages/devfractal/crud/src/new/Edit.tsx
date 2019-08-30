import { API, SubmitAction } from 'devfractal-api'
import { Route, useMatch } from 'devfractal-router'
import { Put } from 'devfractal-ui-api'
import React from 'react'
import { Mixed, string, type, TypeOf } from 'technoidentity-spec'
import { getProp, HasProps } from 'technoidentity-utils'

// tslint:disable no-unbound-method

export interface EditComponentProps<T> {
  readonly initial?: T
  readonly onSubmit: SubmitAction<T>
}

export interface EditProps<Spec extends Mixed, ID extends keyof TypeOf<Spec>> {
  readonly api: API<Spec & HasProps, ID>
  readonly path: string
  readonly redirectTo?: string
  readonly form: React.FC<EditComponentProps<TypeOf<Spec>>>
}

function Children<Spec extends Mixed, ID extends keyof TypeOf<Spec>>({
  api,
  redirectTo,
  form: Component,
}: Omit<EditProps<Spec, ID>, 'path'>): JSX.Element {
  const idPropSpec: Mixed | undefined = getProp(api.spec, api.idKey as string)
  if (idPropSpec === undefined) {
    throw new Error(`${api.idKey} not defined`)
  }

  const { params } = useMatch(type({ [api.idKey]: string }))

  return (
    <Put
      id={params[api.idKey as string]}
      doGet={api.get}
      onPut={api.replace}
      component={Component}
      redirectTo={redirectTo}
    />
  )
}

export function Edit<Spec extends Mixed, ID extends keyof TypeOf<Spec>>({
  path,
  ...props
}: EditProps<Spec, ID>): JSX.Element {
  return path ? (
    <Route path={path} render={() => <Children {...props} />} />
  ) : (
    <Children {...props} />
  )
}
