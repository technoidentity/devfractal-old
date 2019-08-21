import { SubmitAction } from 'devfractal-api'
import { Mixed, number, readonlyArray, string, TypeOf } from 'io-ts'
import { fn, props, req } from 'technoidentity-utils'

// tslint:disable typedef

type CrudOperations = 'list' | 'edit' | 'create'
type Paths = Record<CrudOperations, string>

function base(basePath?: string): string {
  return basePath || ''
}
export function paths(resource: string, basePath?: string): Paths {
  return {
    list: `${base(basePath)}/${resource}`,
    edit: `${base(basePath)}/${resource}/:id/edit`,
    create: `${base(basePath)}/${resource}/add`,
  }
}

type Links = Omit<Paths, 'edit'> & {
  edit(id: string | number | undefined): string
}

export function links(resource: string, basePath?: string): Links {
  return {
    ...paths(resource),
    edit: (id: string | number | undefined) =>
      `${base(basePath)}/${resource}/${id}/edit`,
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
    createTo: string,
    editTo: fn<(id: string | number | undefined) => string>(),
    data: readonlyArray(spec),
  })
}
