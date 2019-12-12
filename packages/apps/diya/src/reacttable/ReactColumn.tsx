import { Th } from 'devfractal-ui-core'
import React from 'react'
import { ReactColumnProps } from './models'
export function ReactColumn<D>({
  getHeaderProps,
  render,
  actions,
}: ReactColumnProps<D>) {
  return (
    <Th {...getHeaderProps()}>
      {render('Header') === 'Table Information' ? (
        <></>
      ) : (
        <>
          {render('Header') === 'Actions' ? (
            actions ? (
              render('Header')
            ) : (
              <></>
            )
          ) : (
            <>{render('Header')}</>
          )}
        </>
      )}
    </Th>
  )
}
