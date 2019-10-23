import React from 'react'
import { ReactColumnProps } from './models'
export function ReactColumn<D>({
  getHeaderProps,
  render,
  actions,
}: ReactColumnProps<D>) {
  return (
    <th {...getHeaderProps()}>
      {render('Header') === 'Actions' ? (
        actions ? (
          render('Header')
        ) : (
          <></>
        )
      ) : (
        render('Header')
      )}
    </th>
  )
}
