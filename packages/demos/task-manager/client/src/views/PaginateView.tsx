import {
  Pagination,
  PaginationEllipsis,
  PaginationLink,
  PaginationList,
  PaginationNext,
  PaginationPrevious,
} from 'devfractal-ui'
import React from 'react'

export const PaginationView: React.FC = () => (
  <Pagination alignment="centered">
    <PaginationPrevious>Previous</PaginationPrevious>
    <PaginationNext>Next</PaginationNext>
    <PaginationList>
      <PaginationLink current aria-label="Goto page 1">
        1
      </PaginationLink>
      <PaginationEllipsis />
      <PaginationLink aria-label="Goto page 46">46</PaginationLink>
      <PaginationLink aria-label="Goto page 47">47</PaginationLink>
      <PaginationEllipsis />
      <PaginationLink aria-label="Goto page 86">86</PaginationLink>
    </PaginationList>
  </Pagination>
)
