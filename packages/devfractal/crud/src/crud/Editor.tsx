import { FormikHelpers } from 'formik'
import React from 'react'
import { useCrudComponents } from 'technoidentity-core'
import { Get } from '../api'
import { isFunction } from '../old'

export interface EditorProps<T extends {}> {
  readonly data: T | (() => Promise<T>)
  readonly id: keyof T
  onSubmit?(values: T, actions: FormikHelpers<T>): void
}

export function Editor<T extends {}>({
  data,
  onSubmit,
  id,
}: EditorProps<T>): JSX.Element {
  const { EditorView } = useCrudComponents()

  if (isFunction(data)) {
    return (
      <Get asyncFn={data}>
        {data => <EditorView id={id} data={data} onSubmit={onSubmit} />}
      </Get>
    )
  }

  return <EditorView id={id} data={data} onSubmit={onSubmit} />
}
