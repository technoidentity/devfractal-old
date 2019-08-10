import { Mixed, type, TypeOf } from 'io-ts'
import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { API, Put, SubmitAction, useMatch } from 'technoidentity-devfractal'
import { getProp, HasProps } from 'technoidentity-utils'

export interface SimplePutComponentProps<T> {
  readonly initial?: T
  readonly onSubmit: SubmitAction<T>
}

export interface SimplePutProps<
  Spec extends Mixed & HasProps,
  ID extends TypeOf<Spec>
> {
  readonly api: API<Spec & HasProps, ID>
  readonly redirectPath?: string
  readonly component: React.FC<SimplePutComponentProps<TypeOf<Spec>>>
}

export function SimplePut<
  Spec extends Mixed & HasProps,
  ID extends TypeOf<Spec>
>({
  api,
  redirectPath,
  component: Component,
}: SimplePutProps<Spec, ID>): JSX.Element {
  const idPropSpec = getProp(api.spec, api.idKey)
  if (idPropSpec === undefined) {
    throw new Error(`${api.idKey} not defined`)
  }

  const { params } = useMatch(type({ [api.idKey]: idPropSpec }))

  return (
    <Put
      id={params[api.idKey]}
      doGet={api.get}
      onPut={api.replace}
      component={Component}
      redirectPath={redirectPath}
    />
  )
}
