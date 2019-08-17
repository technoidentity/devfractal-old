import React from 'react'
import {
  Pagination,
  PaginationNext,
  PaginationPrevious,
} from 'technoidentity-devfractal'

interface PagerProps {
  readonly page: number
  onPageChange(n: number): void
}

export const Pager: React.FC<PagerProps> = ({ page, onPageChange }) => (
  <Pagination alignment="centered">
    <PaginationPrevious
      onClick={() => {
        onPageChange(page + 1)
      }}
    >
      Previous
    </PaginationPrevious>

    <PaginationNext
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
