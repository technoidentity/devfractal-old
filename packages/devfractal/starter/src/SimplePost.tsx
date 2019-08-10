import { Mixed, TypeOf } from 'io-ts'
import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { API, Post, SubmitAction } from 'technoidentity-devfractal'
import { HasProps } from 'technoidentity-utils'

export interface SimplePostProps<
  Spec extends Mixed & HasProps,
  ID extends TypeOf<Spec>
> {
  readonly redirectPath?: string
  readonly component: React.FC<{
    readonly onSubmit: SubmitAction<TypeOf<Spec>>
  }>
  readonly api: API<Spec & HasProps, ID>
}

export function SimplePost<
  Spec extends Mixed & HasProps,
  ID extends TypeOf<Spec>
>({
  api,
  redirectPath,
  component: Component,
}: SimplePostProps<Spec, ID>): JSX.Element {
  return (
    <Post
      component={Component}
      onPost={api.create}
      redirectPath={redirectPath}
    />
  )
}
