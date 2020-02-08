import { API, APIQuery } from 'stp-core'
import { ObjC, Props, TypeOf } from 'stp-utils'
import React from 'react'
import { All, AllComponentProps } from './All'
import { paths as resPaths } from './common'
import { Create } from './Create'
import { Edit, EditComponentProps } from './Edit'

export interface CrudRoutesProps<
  Opt extends Props,
  Req extends Props,
  ID extends keyof TypeOf<ObjC<Opt, Req>>
> {
  readonly api: API<Opt, Req, ID>
  readonly form: React.FC<EditComponentProps<TypeOf<ObjC<Opt, Req>>>>
  readonly list: React.FC<AllComponentProps<TypeOf<ObjC<Opt, Req>>>>
  readonly paths?: ReturnType<typeof resPaths>
  readonly redirectTo?: string
  queryFn?(search: string): APIQuery<TypeOf<ObjC<Opt, Req>>>
}

export function CrudRoutes<
  Opt extends Props,
  Req extends Props,
  ID extends keyof TypeOf<ObjC<Opt, Req>>
>({
  api,
  list,
  form,
  paths = resPaths(api.resource),
  redirectTo = paths.list,
}: CrudRoutesProps<Opt, Req, ID>): JSX.Element {
  const { create, edit, list: listPath } = paths

  return (
    <>
      <Edit path={edit} api={api} form={form} redirectTo={redirectTo} />
      <All api={api} list={list} path={listPath} />
      <Create path={create} redirectTo={redirectTo} api={api} form={form} />
    </>
  )
}
