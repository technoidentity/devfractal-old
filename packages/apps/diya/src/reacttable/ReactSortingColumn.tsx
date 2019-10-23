import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
import { Icon, Th } from 'devfractal-ui-core'
import React from 'react'
import { EnhancedColumn } from 'react-table'
export function ReactSortingColumn<D>({
  getHeaderProps,
  getSortByToggleProps,
  render,
  isSorted,
  isSortedDesc,
}: EnhancedColumn<D>) {
  return (
    <>
      <Th {...getHeaderProps()} {...getHeaderProps(getSortByToggleProps())}>
        {render('Header') === 'Table Information' ? (
          <></>
        ) : (
          <>
            {render('Header') === 'Actions' ? (
              render('Header')
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
