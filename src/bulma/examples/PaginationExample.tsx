import * as React from 'react'
import {
  PaginationPrevious,
  Pagination,
  PaginationNext,
  PaginationList,
  PaginationLink,
  PaginationEllipsis,
} from '../components/Pagination'

export const PaginationExample: React.SFC = () => (
  <Pagination rounded size="large">
    <PaginationPrevious>Previous</PaginationPrevious>
    <PaginationNext>Next page</PaginationNext>
    <PaginationList>
      <PaginationLink ariaLabel="Goto page 1">1</PaginationLink>
      <PaginationEllipsis>&hellip</PaginationEllipsis>
      <PaginationLink ariaLabel="Goto page 45">45</PaginationLink>
      <PaginationLink ariaLabel="Page 46" current>
        46
      </PaginationLink>
      <PaginationLink ariaLabel="Goto page 47">47</PaginationLink>
      <PaginationEllipsis>&hellip</PaginationEllipsis>
      <PaginationLink ariaLabel="Goto page 86">86</PaginationLink>
    </PaginationList>
  </Pagination>
)
