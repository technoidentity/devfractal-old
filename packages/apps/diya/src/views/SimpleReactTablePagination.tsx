import React from 'react'
export interface PaginationProps{
    readonly canPreviousPage:boolean
    readonly canNextPage:boolean
    readonly pageOptions:ReadonlyArray<number>
    readonly pageCount:number
    previousPage():number
    gotoPage(page:number):number
    nextPage():number
    setPageSize(size:number):number
    readonly pageIndex:number
    readonly pageSize:number
  }

export const SimpleReactTablePagination = (props:PaginationProps) => {
    return(
        <div style={{padding: '0.5rem'}}>
        <button onClick={() => props.gotoPage(0)} disabled={!props.canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={props.previousPage} disabled={!props.canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={props.nextPage} disabled={!props.canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => props.gotoPage(props.pageCount - 1)} disabled={!props.canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {props.pageIndex + 1} of {props.pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={`${props.pageIndex + 1}`}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              props.gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={props.pageSize}
          onChange={e => {
            props.setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    )
}
