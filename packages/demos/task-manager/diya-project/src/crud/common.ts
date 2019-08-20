import { Mixed, readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import { SubmitAction } from 'technoidentity-devfractal'
import { cast, empty, fn, props, req } from 'technoidentity-utils'

// tslint:disable typedef

type CrudOperations = 'list' | 'edit' | 'create'
type Paths = Record<CrudOperations, string>

export function paths(resource: string): Paths {
  return {
    list: `/${resource}`,
    edit: `/${resource}/:id/edit`,
    create: `/${resource}/add`,
  }
}

type Links = Omit<Paths, 'edit'> & {
  edit(id: string | number | undefined): string
}

export function links(resource: string): Links {
  return {
    ...paths(resource),
    edit: (id: string | number | undefined) => `/${resource}/${id}/edit`,
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
  return (props: FormProps<TypeOf<Spec>>) =>
    React.createElement(inner, {
      initial: empty(spec),
      edit: props.initial !== undefined,
      ...cast(formProps(spec), props),
    })
}

interface ListProps<Spec extends Mixed> {
  readonly data: readonly TypeOf<Spec>[]
}

// tslint:disable-next-line: typedef
export function listComponent<Spec extends Mixed>(
  spec: Spec,
  inner: React.FC<ListProps<Spec>>,
): React.FC<ListProps<Spec>> {
  return (props: ListProps<Spec>) =>
    React.createElement(inner, cast(listProps(spec), props))
}
