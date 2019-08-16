import { Mixed, TypeOf } from 'io-ts'
import React from 'react'
import {
  API,
  SimpleGet,
  SimpleGetComponentProps,
  SimplePost,
  SimplePut,
  SimplePutComponentProps,
} from 'technoidentity-devfractal'
import { HasProps } from 'technoidentity-utils'
import { paths as resPaths } from '../common'

interface RoutesProps<Spec extends Mixed, ID extends keyof TypeOf<Spec>> {
  readonly api: API<Spec & HasProps, ID>
  readonly resource: string
  readonly formComponent: React.FC<SimplePutComponentProps<TypeOf<Spec>>>
  readonly listComponent: React.FC<SimpleGetComponentProps<TypeOf<Spec>>>
  readonly paths?: ReturnType<typeof resPaths>
  readonly redirectPath?: string
}

export function CrudRoutes<Spec extends Mixed, ID extends keyof TypeOf<Spec>>({
  api,
  resource,
  listComponent,
  formComponent,
  paths: { edit, create, list } = resPaths(resource),
  redirectPath = list,
}: RoutesProps<Spec, ID>): JSX.Element {
  return (
    <>
      <SimplePut
        path={edit}
        api={api}
        component={formComponent}
        redirectPath={redirectPath}
      />

      <SimpleGet api={api} component={listComponent} path={list} />

      <SimplePost
        path={create}
        redirectPath={redirectPath}
        api={api}
        component={formComponent}
      />
    </>
  )
}
