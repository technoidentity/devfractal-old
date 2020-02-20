import React from 'react'
import { ViewerView } from 'technoidentity-ui'
import { isFunction } from 'technoidentity-utils'
import { Get } from './api'

export interface ViewerProps<T extends {}> {
  readonly data: T | (() => Promise<T>)
}

export function Viewer<T extends {}>({ data }: ViewerProps<T>): JSX.Element {
  if (isFunction(data)) {
    return <Get asyncFn={data}>{data => <ViewerView data={data} />}</Get>
  }
  return <ViewerView data={data} />
}
