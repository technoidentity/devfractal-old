import { FormikActions } from 'formik'
import { Mixed, TypeOf } from 'io-ts'
import React from 'react'
import { component } from 'technoidentity-devfractal'
import { empty, fn, props, req } from 'technoidentity-utils'

interface FormProps<Spec extends Mixed> {
  readonly initial: TypeOf<Spec>
  onSubmit(
    values: TypeOf<Spec>,
    actions: FormikActions<TypeOf<Spec>>,
  ): Promise<void>
}

// tslint:disable-next-line: typedef
function formProps<Spec extends Mixed>(spec: Spec) {
  return req({
    initial: spec,
    onSubmit: fn<
      (
        values: TypeOf<Spec>,
        actions: FormikActions<TypeOf<Spec>>,
      ) => Promise<void>
    >(),
  })
}

export function formComponent<Spec extends Mixed>(
  spec: Spec,
  inner: React.FC<FormProps<Spec>>,
): React.FC<FormProps<Spec>> {
  return component(formProps(spec), props =>
    React.createElement(inner, { initial: empty(spec), ...props }),
  )
}
