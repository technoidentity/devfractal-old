import { Mixed, TypeOf } from 'io-ts'
import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { API, Get } from 'technoidentity-devfractal'

export interface SimpleGetComponentProps<T> {
  readonly data: T
  // fetchAgain(): void
}

export interface SimpleGetProps<
  Spec extends Mixed,
  ID extends keyof TypeOf<Spec>
> {
  readonly api: API<Spec, ID>
  readonly component: React.FC<SimpleGetComponentProps<TypeOf<Spec>>>
}

export function SimpleGet<Spec extends Mixed, ID extends keyof TypeOf<Spec>>({
  api,
  component: Component,
}: SimpleGetProps<Spec, ID>): JSX.Element {
  return (
    <Get asyncFn={() => api.many()}>{data => <Component data={data} />}</Get>
  )
}
