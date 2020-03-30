import React from 'react'
import { PagerProps } from 'srtp-core'
import { Pagination, PaginationNext, PaginationPrevious } from './Pagination'

export const Pager: React.FC<PagerProps> = ({
  page,
  maxPages,
  onPageChange,
}) => (
  <Pagination alignment="centered">
    <PaginationPrevious
      invisible={page <= 1}
      onClick={() => {
        onPageChange(page - 1)
      }}
    >
      Previous
    </PaginationPrevious>

    <PaginationNext
      invisible={maxPages !== undefined && page >= maxPages}
      onClick={() => {
        onPageChange(page + 1)
      }}
    >
      Next
    </PaginationNext>

    {/* <PaginationList>
      <PaginationLink current aria-label="Goto page 1">
        1
      </PaginationLink>
      <PaginationEllipsis>&hellip</PaginationEllipsis>
      <PaginationLink aria-label="Goto page 11">11</PaginationLink>
      <PaginationLink aria-label="Page 12">12</PaginationLink>

      <PaginationEllipsis />
      <PaginationLink aria-label="Goto page 20">20</PaginationLink>
    </PaginationList> */}
  </Pagination>
)
