import { SubmitAction } from 'devfractal-api'
import { Mixed, number, readonlyArray, string, TypeOf } from 'io-ts'
import { fn, props, req } from 'technoidentity-utils'

// tslint:disable typedef

type CrudOperations = 'list' | 'edit' | 'create'
type Paths = Record<CrudOperations, string>

export function paths(resource: string, basePath: string = '/'): Paths {
  return {
    list: `${basePath}/${resource}`,
    edit: `${basePath}/${resource}/:id/edit`,
    create: `${basePath}/${resource}/add`,
  }
}

type Links = Omit<Paths, 'edit'> & {
  edit(id: string | number | undefined): string
}

export function links(resource: string, basePath: string = '/'): Links {
  return {
    ...paths(resource),
    edit: (id: string | number | undefined) =>
      `${basePath}/${resource}/${id}/edit`,
  }
}

export function formProps<Spec extends Mixed>(spec: Spec) {
  return props(
    { initial: spec },
    { createLink: string, onSubmit: fn<SubmitAction<TypeOf<Spec>>>() },
  )
}

export function listProps<Spec extends Mixed>(spec: Spec) {
  return req({
    data: readonlyArray(spec),
    page: number,
    editLink: fn<(id: string | number | undefined) => string>(),
    onPageChange: fn<(page: number) => void>(),
  })
}
