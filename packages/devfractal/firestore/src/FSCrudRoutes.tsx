import React from 'react'
import { ObjC, Props, TypeOf } from 'srtp-utils'
import { FirstoreAPI } from './firestoreRest'
import { FSAll, FSAllComponentProps } from './FSAll'
import { FSCreate } from './FSCreate'
import { FSEdit, FSEditComponentProps } from './FSEdit'

function base(resource: string, basePath?: string): string {
  return basePath ? `${basePath}/${resource}` : `/${resource}`
}

// tslint:disable-next-line: typedef
export function resPaths(resource: string, basePath?: string) {
  return {
    list: `${base(resource, basePath)}`,
    view: `${base(resource, basePath)}/:id`,
    edit: `${base(resource, basePath)}/:id/edit`,
    create: `${base(resource, basePath)}/new`,
  }
}

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
