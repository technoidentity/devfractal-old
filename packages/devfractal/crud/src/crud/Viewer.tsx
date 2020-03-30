import React from 'react'
import { useCrudComponents } from 'srtp-core'
import { isFunction } from 'srtp-utils'
import { Get } from '../api'

export interface ViewerProps<T extends {}> {
  readonly data: T | (() => Promise<T>)
}

export function Viewer<T extends {}>({ data }: ViewerProps<T>): JSX.Element {
  const { ViewerView } = useCrudComponents()
  if (isFunction(data)) {
    return <Get asyncFn={data}>{data => <ViewerView data={data} />}</Get>
  }
  return <ViewerView data={data} />
}
