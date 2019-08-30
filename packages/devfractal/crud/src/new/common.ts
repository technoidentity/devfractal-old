import { SubmitAction } from 'devfractal-api'
import { Mixed, number, readonlyArray, TypeOf } from 'technoidentity-spec'
import { fn, props, req } from 'technoidentity-utils'

// tslint:disable typedef

type CrudOperations = 'list' | 'edit' | 'create' | 'view'
export type Paths = Record<CrudOperations, string>

export function base(resource: string, basePath?: string): string {
  return basePath ? `${basePath}/${resource}` : `/${resource}`
}

export function paths(resource: string, basePath?: string): Paths {
  return {
    list: `${base(resource, basePath)}`,
    view: `${base(resource, basePath)}/:id`,
    edit: `${base(resource, basePath)}/:id/edit`,
    create: `${base(resource, basePath)}/new`,
  }
}

export type Links = Omit<Paths, 'edit' | 'view'> & {
  edit(id: string | number | undefined): string
  view(id: string | number | undefined): string
}

export function links(resource: string, basePath?: string): Links {
  return {
    ...paths(resource),
    view: id => `${base(resource, basePath)}/${id}`,
    edit: id => `${base(resource, basePath)}/${id}/edit`,
  }
}

export function formProps<Spec extends Mixed>(spec: Spec) {
  return props(
    { initial: spec },
    { onSubmit: fn<SubmitAction<TypeOf<Spec>>>() },
  )
}

export function listProps<Spec extends Mixed>(spec: Spec) {
  return req({
    page: number,
    onPageChange: fn<(page: number) => void>(),
    data: readonlyArray(spec),
  })
}
