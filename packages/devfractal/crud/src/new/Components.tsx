import { SubmitAction } from 'devfractal-api'
import { Mixed, TypeOf } from 'io-ts'
import React from 'react'
import { cast, empty } from 'technoidentity-utils'
import { formProps, listProps } from './common'

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

interface InnerListProps<Spec extends Mixed> {
  readonly data: ReadonlyArray<TypeOf<Spec>>
  readonly page: number
  onPageChange(page: number): void
  editLink(id: string | number | undefined): string
}

interface ListProps<Spec extends Mixed> {
  readonly data: ReadonlyArray<TypeOf<Spec>>
  readonly page: number
  onPageChange(page: number): void
}

// tslint:disable typedef

export function formComponent<Spec extends Mixed>(
  spec: Spec,
  inner: React.FC<InnerFormProps<Spec>>,
): React.FC<FormProps<Spec>> {
  return ({ initial, ...props }) => {
    const Component = inner
    const verified = cast(formProps(spec), props)
    const compProps = {
      initial: initial || empty(spec),
      edit: initial !== undefined,
      ...verified,
    }

    return <Component {...compProps} />
  }
}
export function listComponent<Spec extends Mixed>(
  spec: Spec,
  inner: React.FC<InnerListProps<Spec>>,
): React.FC<ListProps<Spec>> {
  const Component = inner
  return (props: ListProps<Spec>) => (
    <Component {...cast(listProps(spec), props)} />
  )
}

// tslint:enable typedef
