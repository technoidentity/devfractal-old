import React from 'react'
import {
  Pagination,
  PaginationEllipsis,
  PaginationLink,
  PaginationList,
  PaginationNext,
  PaginationPrevious,
  Section,
} from 'technoidentity-devfractal'

export const StaticPagination: React.FC = () => (
  <>
    <Section modifier="medium">
      <Pagination alignment="centered">
        <PaginationPrevious>Previous</PaginationPrevious>
        <PaginationNext>Next page</PaginationNext>
        <PaginationList>
          <PaginationLink current aria-label="Goto page 1">
            1
          </PaginationLink>
          <PaginationEllipsis>&hellip</PaginationEllipsis>
          <PaginationLink aria-label="Goto page 11">11</PaginationLink>
          <PaginationLink aria-label="Page 12">12</PaginationLink>

          <PaginationEllipsis />
          <PaginationLink aria-label="Goto page 20">20</PaginationLink>
        </PaginationList>
      </Pagination>
    </Section>
  </>
)
