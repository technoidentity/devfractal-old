import { SubmitAction } from 'devfractal-api'
import { Mixed, readonlyArray, TypeOf } from 'io-ts'
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
    { onSubmit: fn<SubmitAction<TypeOf<Spec>>>() },
  )
}

export function listProps<Spec extends Mixed>(spec: Spec) {
  return req({ data: readonlyArray(spec) })
}

interface InnerFormProps<Spec extends Mixed> {
  readonly initial: TypeOf<Spec>
  readonly edit: boolean
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

interface ListProps<Spec extends Mixed> {
  readonly data: ReadonlyArray<TypeOf<Spec>>
}

// tslint:disable-next-line: typedef
export function listComponent<Spec extends Mixed>(
  spec: Spec,
  inner: React.FC<ListProps<Spec>>,
): React.FC<ListProps<Spec>> {
  return (props: ListProps<Spec>) =>
    React.createElement(inner, cast(listProps(spec), props))
}
