import { cast, empty, Mixed, TypeOf } from 'stp-utils'
import { FormikHelpers } from 'formik'
import React from 'react'
import { formProps } from './common'

interface InnerFormProps<T> {
  readonly initial: T
  readonly edit: boolean
  onSubmit(values: T, actions: FormikHelpers<T>): Promise<void>
}

export interface FormProps<T> {
  readonly onSubmit: InnerFormProps<T>['onSubmit']
  readonly initial?: InnerFormProps<T>['initial']
}

// tslint:disable typedef

export function formComponent<Spec extends Mixed>(
  spec: Spec,
  inner: React.FC<InnerFormProps<TypeOf<Spec>>>,
): React.FC<FormProps<TypeOf<Spec>>> {
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
