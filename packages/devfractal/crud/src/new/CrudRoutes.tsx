import { API, APIQuery } from 'devfractal-api'
import { Mixed, TypeOf } from 'io-ts'
import React from 'react'
import { HasProps } from 'technoidentity-utils'
import { All, AllComponentProps } from './All'
import { links as resLinks, paths as resPaths } from './common'
import { Create } from './Create'
import { Edit, EditComponentProps } from './Edit'

export interface CrudRoutesProps<
  Spec extends Mixed,
  ID extends keyof TypeOf<Spec>
> {
  readonly api: API<Spec & HasProps, ID>
  readonly form: React.FC<EditComponentProps<TypeOf<Spec>>>
  readonly list: React.FC<AllComponentProps<TypeOf<Spec>>>
  readonly paths?: ReturnType<typeof resPaths>
  readonly links?: ReturnType<typeof resLinks>
  readonly redirectTo?: string
  queryFn?(search: string): APIQuery<TypeOf<Spec>>
}

// tslint:disable no-unbound-method

export function CrudRoutes<Spec extends Mixed, ID extends keyof TypeOf<Spec>>({
  api,
  list,
  form,
  paths = resPaths(api.resource),
  links = resLinks(api.resource),
  redirectTo = links.list,
}: CrudRoutesProps<Spec, ID>): JSX.Element {
  return (
    <>
      <Edit path={paths.edit} api={api} form={form} redirectTo={redirectTo} />

      <All
        api={api}
        list={list}
        path={paths.list}
        editTo={links.edit}
        createTo={links.create}
      />

      <Create
        path={paths.create}
        redirectTo={redirectTo}
        api={api}
        form={form}
      />
    </>
  )
}
