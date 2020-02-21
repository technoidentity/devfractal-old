import React from 'react'
import { EditorProps } from 'technoidentity-core'
import { EditorView } from 'technoidentity-ui'
import { Get } from './api'
import { isFunction } from './old'

export function Editor<T extends {}>({
  data,
  onSubmit,
  id,
}: EditorProps<T>): JSX.Element {
  if (isFunction(data)) {
    return (
      <Get asyncFn={data}>
        {data => <EditorView id={id} data={data} onSubmit={onSubmit} />}
      </Get>
    )
  }

  return <EditorView id={id} data={data} onSubmit={onSubmit} />
}
