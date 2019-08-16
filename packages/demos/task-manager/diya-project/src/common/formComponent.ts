import { FormikActions } from 'formik'
import { Mixed, TypeOf } from 'io-ts'
import React from 'react'
import { component } from 'technoidentity-devfractal'
import { empty } from 'technoidentity-utils'
import { formProps } from './crud'

interface FormProps<Spec extends Mixed> {
  readonly initial: TypeOf<Spec>
  onSubmit(
    values: TypeOf<Spec>,
    actions: FormikActions<TypeOf<Spec>>,
  ): Promise<void>
}

// tslint:disable-next-line: typedef
export function formComponent<Spec extends Mixed>(
  spec: Spec,
  inner: React.FC<FormProps<Spec>>,
) {
  return component(formProps(spec), props =>
    React.createElement(inner, { initial: empty(spec), ...props }),
  )
}
