import { SubmitAction } from 'devfractal-api'
import { Mixed, number, readonlyArray, string, TypeOf } from 'io-ts'
import React from 'react'
import { cast, empty, fn, props, req } from 'technoidentity-utils'

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

interface InnerFormProps<Spec extends Mixed> {
  readonly initial: TypeOf<Spec>
  readonly edit: boolean
  readonly createLink: string
  readonly onSubmit: SubmitAction<TypeOf<Spec>>
}

interface FormProps<Spec extends Mixed> {
  readonly initial?: InnerFormProps<Spec>['initial']
  readonly onSubmit: InnerFormProps<Spec>['onSubmit']
}

// tslint:disable-next-line: typedef
export function formComponent<Spec extends Mixed>(
  spec: Spec,
  inner: React.FC<InnerFormProps<Spec>>,
): React.FC<FormProps<Spec>> {
  return ({ initial, ...props }) => {
    return React.createElement(inner, {
      initial: initial || empty(spec),
      edit: initial !== undefined,
      ...cast(formProps(spec), props),
    })
  }
}

export function listProps<Spec extends Mixed>(spec: Spec) {
  return req({
    data: readonlyArray(spec),
    page: number,
    editLink: fn<(id: string | number | undefined) => string>(),
    onPageChange: fn<(page: number) => void>(),
  })
}

interface InnerListProps<Spec extends Mixed> {
  readonly data: ReadonlyArray<TypeOf<Spec>>
  readonly page: number
  editLink(id: string | number | undefined): string
  onPageChange(page: number): void
}

interface ListProps<Spec extends Mixed> {
  readonly data: ReadonlyArray<TypeOf<Spec>>
  readonly page?: number
  onPageChange?(page: number): void
}

// tslint:disable-next-line: typedef
export function listComponent<Spec extends Mixed>(
  spec: Spec,
  inner: React.FC<ListProps<Spec>>,
): React.FC<InnerListProps<Spec>> {
  return (props: ListProps<Spec>) =>
    React.createElement(inner, cast(listProps(spec), props))
}
