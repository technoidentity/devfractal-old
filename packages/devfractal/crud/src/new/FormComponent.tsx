import { SubmitAction } from 'devfractal-api'
import { Mixed, TypeOf } from 'io-ts'
import React from 'react'
import { cast, empty } from 'technoidentity-utils'
import { formProps } from './common'

interface InnerFormProps<Spec extends Mixed> {
  readonly initial: TypeOf<Spec>
  readonly edit: boolean
  readonly onSubmit: SubmitAction<TypeOf<Spec>>
}

export interface FormProps<Spec extends Mixed>
  extends Omit<InnerFormProps<Spec>, 'initial' | 'edit'> {
  readonly initial?: InnerFormProps<Spec>['initial']
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
