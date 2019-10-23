import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
import { Icon, Th } from 'devfractal-ui-core'
import React from 'react'
import { ReactColumnProps } from './models'

export function ReactSortingColumn<D>({
  getHeaderProps,
  getSortByToggleProps,
  render,
  isSorted,
  isSortedDesc,
  actions,
}: ReactColumnProps<D>) {
  return (
    <>
      <Th {...getHeaderProps()} {...getHeaderProps(getSortByToggleProps())}>
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
              <>
                {render('Header')}
                <span>
                  {isSorted ? (
                    isSortedDesc ? (
                      <Icon icon={faSortDown} />
                    ) : (
                      <Icon icon={faSortUp} />
                    )
                  ) : (
                    <Icon icon={faSort} />
                  )}
                </span>
              </>
            )}
          </>
        )}
      </Th>
    </>
  )
}
