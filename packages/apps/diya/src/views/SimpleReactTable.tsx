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

function Table<D>(props: TableOptions<D>) {
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
export = Table
