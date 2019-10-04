import React from 'react'
import {
  TableInstance,
  TableOptions,
  useFilters,
  usePagination,
  useSortBy,
  useTable,
  useTableState,
} from 'react-table'

import { SimpleReactTablePagination } from '../views/SimpleReactTablePagination'

// export interface UsePaginationState {
//   readonly pageIndex: number
//   readonly pageSize: number
//   readonly pageCount: number
//   readonly rowCount: number
// }
// type StringKey<D> = Extract<keyof D, string>
// type IdType<D> = StringKey<D> | string

// interface SortingRule<D> {
//   readonly id: IdType<D>
//   readonly desc: boolean
// }

// export type SortingRules<D> = ReadonlyArray<SortingRule<D>>

// export interface UseFiltersState<D> {
//   readonly filters?: Filters<D>
// }
// export type Filters<D> = Record<IdType<D>, string>
// export interface UseSortbyState<D> {
//   readonly sortBy?: SortingRules<D>
// }
// export interface TableState<D = {}>
//   extends UsePaginationState,
//   TableOptions<D>,
//     UseSortbyState<D>,
//     UseFiltersState<D> {}

// export type SetState<D> = (
//   updater: (old: TableState<D>) => TableState<D>,
//   actions: any,
// ) => void

// export type State<D> = readonly [TableState<D>, SetState<D>]

export function Table<D>(props: TableOptions<D>) {
  const { columns, data } = props
  const tableState = useTableState({ pageIndex: 0 })
  const {
    getTableProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageCount,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
  }: TableInstance<D> = useTable(
    {
      columns,
      data,
      state: tableState,
    },
    useFilters,
    useSortBy,
    usePagination,
  )
  return (
    <>
            
      <table {...getTableProps()}>
                
        <thead>
                    
          {headerGroups.map((headerGroup, index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                            
              {headerGroup.headers.map((column, index) => (
                <th
                  key={index}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                                    {column.render('Header')}
                                    
                  <span>
                                        
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                                      
                  </span>
                                    
                  <div>
                                        
                    {column.Filter ? column.render('Filter') : undefined}
                                      
                  </div>
                                  
                </th>
              ))}
                          
            </tr>
          ))}
                  
        </thead>
                
        <tbody>
                    
          {page.map(
            row =>
              prepareRow(row) || (
                <tr {...row.getRowProps()}>
                                    
                  {row.cells.map((cell, index) => {
                    return (
                      <td key={index} {...cell.getCellProps()}>
                                                {cell.render('Cell')}
                                              
                      </td>
                    )
                  })}
                                  
                </tr>
              ),
          )}
                  
        </tbody>
              
      </table>
            
      <SimpleReactTablePagination
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        pageOptions={pageOptions}
        pageCount={pageCount}
        gotoPage={gotoPage}
        nextPage={nextPage}
        previousPage={previousPage}
        setPageSize={setPageSize}
        pageIndex={state && state[0].pageIndex}
        pageSize={state && state[0].pageSize}
      />
            
      <br />
            <div>Showing the first 20 results of {page.length} rows</div>
          
    </>
  )
}
