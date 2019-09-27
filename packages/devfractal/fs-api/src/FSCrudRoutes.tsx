import { paths as resPaths } from 'devfractal-crud'
import { TypeOf } from 'io-ts'
import React from 'react'
import { ObjC, Props } from 'technoidentity-utils'
import { FirstoreAPI } from './firestoreRest'
import { FSAll, FSAllComponentProps } from './FSAll'
import { FSCreate } from './FSCreate'
import { FSEdit, FSEditComponentProps } from './FSEdit'

export interface FSCrudRouteProps<
  Opt extends Props,
  Req extends Props,
  ID extends keyof TypeOf<ObjC<Opt, Req>>
> {
  readonly api: FirstoreAPI<Opt, Req, ID>
  readonly form: React.FC<FSEditComponentProps<TypeOf<ObjC<Opt, Req>>>>
  readonly list: React.FC<FSAllComponentProps<TypeOf<ObjC<Opt, Req>>>>
  readonly paths?: ReturnType<typeof resPaths>
  readonly redirectTo?: string
  // queryFn?(search: string): APIQuery<TypeOf<ObjC<Opt, Req>>>
}

export function FSCrudRoutes<
  Opt extends Props,
  Req extends Props,
  ID extends keyof TypeOf<ObjC<Opt, Req>>
>({
  api,
  list,
  form,
  paths = resPaths(api.resource),
  redirectTo = paths.list,
}: FSCrudRouteProps<Opt, Req, ID>): JSX.Element {
  const { create, edit, list: listPath } = paths

  return (
    <>
      <FSEdit path={edit} api={api} form={form} redirectTo={redirectTo} />
      <FSAll api={api} list={list} path={listPath} />
      <FSCreate path={create} redirectTo={redirectTo} api={api} form={form} />
    </>
  )
}
