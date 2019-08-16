import { FormikActions } from 'formik'
import { Mixed, TypeOf } from 'io-ts'
import React from 'react'
import { cast, empty } from 'technoidentity-utils'
import { formProps, listProps } from './crud'

interface InnerFormProps<Spec extends Mixed> {
  readonly initial: TypeOf<Spec>
  readonly edit: boolean
  onSubmit(
    values: TypeOf<Spec>,
    actions: FormikActions<TypeOf<Spec>>,
  ): Promise<void>
}

type FormProps<Spec extends Mixed> = Omit<InnerFormProps<Spec>, 'edit'> & {
  readonly initial?: InnerFormProps<Spec>['initial']
}

// tslint:disable-next-line: typedef
export function formComponent<Spec extends Mixed>(
  spec: Spec,
  inner: React.FC<InnerFormProps<Spec>>,
): React.FC<FormProps<Spec>> {
  return (props: FormProps<TypeOf<Spec>>) => {
    cast(formProps(spec), props)
    return React.createElement(inner, {
      initial: empty(spec),
      edit: props.initial !== undefined,
      ...props,
    })
  }
}

interface ListProps<Spec extends Mixed> {
  readonly data: readonly TypeOf<Spec>[]
}

// tslint:disable-next-line: typedef
export function listComponent<Spec extends Mixed>(
  spec: Spec,
  inner: React.FC<ListProps<Spec>>,
): React.FC<ListProps<Spec>> {
  return (props: ListProps<Spec>) => {
    cast(listProps(spec), props)
    return React.createElement(inner, props)
  }
}
