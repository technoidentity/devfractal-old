import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons'
import { Button, Columns, Icon, Select, Text } from 'devfractal-ui-core'
import React from 'react'
import { PaginationProps } from './models'

export const Pagination: React.FC<PaginationProps> = ({
  gotoPage,
  canPreviousPage,
  previousPage,
  nextPage,
  canNextPage,
  pageCount,
  pageIndex,
  pageOptions,
  pageSize,
  setPageSize,
}) => {
  return (
    <Columns>
      <Button
        display="inline-flex"
        onClick={() => gotoPage(0)}
        disabled={!canPreviousPage}
      >
        <Icon icon={faAngleDoubleLeft} />
      </Button>
      <Button
        display="inline-flex"
        onClick={previousPage}
        disabled={!canPreviousPage}
      >
        <Icon icon={faAngleLeft} />
      </Button>
      <Button onClick={nextPage} disabled={!canNextPage}>
        <Icon icon={faAngleRight} />
      </Button>
      <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        <Icon icon={faAngleDoubleRight} />
      </Button>

      <Select
        value={pageSize}
        onChange={e => {
          setPageSize(Number(e.target.value))
        }}
      >
        {[10, 20, 30, 40, 50].map(pageSize => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </Select>
      <Text style={{ paddingTop: 6, paddingLeft: 5 }}>
        Page
        {pageIndex + 1} of {pageOptions.length}
      </Text>
    </Columns>
  )
}
