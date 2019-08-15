import { FormikActions } from 'formik'
import { Mixed, readonlyArray, TypeOf } from 'io-ts'
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

// tslint:disable typedef

export function formProps<Spec extends Mixed>(spec: Spec) {
  return props(
    { initial: spec },
    {
      onSubmit: fn<
        (
          values: TypeOf<Spec>,
          actions: FormikActions<TypeOf<Spec>>,
        ) => Promise<void>
      >(),
    },
  )
}

export function listProps<Spec extends Mixed>(spec: Spec) {
  return req({ data: readonlyArray(spec) })
}

export function formComponent<Spec extends Mixed>(
  spec: Spec,
  inner: React.FC<FormProps<Spec>>,
) {
  return component(formProps(spec), props =>
    React.createElement(inner, { initial: empty(spec), ...props }),
  )
}
