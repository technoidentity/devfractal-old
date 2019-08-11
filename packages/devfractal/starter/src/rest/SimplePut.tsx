import { Mixed, string, type, TypeOf } from 'io-ts'
import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import {
  API,
  Put,
  SafeRoute as Route,
  SubmitAction,
  useMatch,
} from 'technoidentity-devfractal'
import { getProp, HasProps } from 'technoidentity-utils'

export interface SimplePutComponentProps<T> {
  readonly initial?: T
  readonly onSubmit: SubmitAction<T>
}

export interface SimplePutProps<
  Spec extends Mixed,
  ID extends keyof TypeOf<Spec>
> {
  readonly api: API<Spec & HasProps, ID>
  readonly path: string
  readonly redirectPath?: string
  readonly component: React.FC<SimplePutComponentProps<TypeOf<Spec>>>
}

function SimplePutChildren<Spec extends Mixed, ID extends keyof TypeOf<Spec>>({
  api,
  redirectPath,
  component: Component,
}: Omit<SimplePutProps<Spec, ID>, 'path'>) {
  const idPropSpec = getProp(api.spec, api.idKey as string)
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
      redirectPath={redirectPath}
    />
  )
}

export function SimplePut<Spec extends Mixed, ID extends keyof TypeOf<Spec>>({
  path,
  ...props
}: SimplePutProps<Spec, ID>): JSX.Element {
  return path ? (
    <Route path={path} render={() => <SimplePutChildren {...props} />} />
  ) : (
    <SimplePutChildren {...props} />
  )
}
