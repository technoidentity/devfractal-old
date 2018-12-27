import React from 'react'
import {
  Pagination,
  PaginationEllipsis,
  PaginationLink,
  PaginationList,
  PaginationNext,
  PaginationPrevious,
} from '../../components/Pagination'

export const PaginationExample: React.SFC = () => (
  <div>
    <Pagination size="small">
      <PaginationPrevious>Previous</PaginationPrevious>
      <PaginationNext>Next page</PaginationNext>
      <PaginationList>
        <PaginationLink current aria-label="Goto page 1">
          1
        </PaginationLink>
        <PaginationEllipsis>&hellip</PaginationEllipsis>
        <PaginationLink aria-label="Goto page 45">45</PaginationLink>
        <PaginationLink aria-label="Page 46" current>
          46
        </PaginationLink>
        <PaginationLink aria-label="Goto page 47">47</PaginationLink>
        <PaginationEllipsis>&hellip</PaginationEllipsis>
        <PaginationLink aria-label="Goto page 86">86</PaginationLink>
      </PaginationList>
    </Pagination>
    <Pagination className="is-small" rounded>
      <PaginationPrevious>Previous</PaginationPrevious>
      <PaginationNext>Next page</PaginationNext>
      <PaginationList>
        <PaginationLink current aria-label="Goto page 1">
          1
        </PaginationLink>
        <PaginationEllipsis>&hellip</PaginationEllipsis>
        <PaginationLink aria-label="Goto page 45">45</PaginationLink>
        <PaginationLink aria-label="Page 46" current>
          46
        </PaginationLink>
        <PaginationLink aria-label="Goto page 47">47</PaginationLink>
        <PaginationEllipsis>&hellip</PaginationEllipsis>
        <PaginationLink aria-label="Goto page 86">86</PaginationLink>
      </PaginationList>
    </Pagination>
  </div>
)
