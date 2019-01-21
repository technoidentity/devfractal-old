import React, { useState } from 'react'
import {
  Pagination,
  PaginationEllipsis,
  PaginationLink,
  PaginationList,
  PaginationNext,
  PaginationPrevious,
  Section,
  SimplePagerView,
  Text,
  Title,
} from '../devfractal'

export const SimplePagination: React.SFC = () => (
  <>
    <Title>Pagination example</Title>
    <Section>
      <Pagination>
        <PaginationPrevious>Previous</PaginationPrevious>
        <PaginationNext>Next page</PaginationNext>
        <PaginationList>
          <PaginationLink current aria-label="Goto page 1">
            1
          </PaginationLink>
          <PaginationEllipsis />
          <PaginationLink aria-label="Goto page 45">45</PaginationLink>
          <PaginationLink aria-label="Page 46" current>
            46
          </PaginationLink>
          <PaginationLink aria-label="Goto page 47">47</PaginationLink>
          <PaginationEllipsis />
          <PaginationLink aria-label="Goto page 86">86</PaginationLink>
        </PaginationList>
      </Pagination>
    </Section>
  </>
)

export const PagerAlignment: React.SFC = () => (
  <>
    <Title>Alignment</Title>
    <Section>
      <Text textWeight="bold">Centered</Text>
      <Pagination alignment="centered">
        <PaginationPrevious>Previous</PaginationPrevious>
        <PaginationNext>Next page</PaginationNext>
        <PaginationList>
          <PaginationLink current aria-label="Goto page 1">
            1
          </PaginationLink>
          <PaginationEllipsis />
          <PaginationLink aria-label="Goto page 45">45</PaginationLink>
          <PaginationLink aria-label="Page 46" current>
            46
          </PaginationLink>
          <PaginationLink aria-label="Goto page 47">47</PaginationLink>
          <PaginationEllipsis />
          <PaginationLink aria-label="Goto page 86">86</PaginationLink>
        </PaginationList>
      </Pagination>
    </Section>
    <Section>
      <Text textWeight="bold">Right </Text>
      <Pagination alignment="right">
        <PaginationPrevious>Previous</PaginationPrevious>
        <PaginationNext>Next page</PaginationNext>
        <PaginationList>
          <PaginationLink current aria-label="Goto page 1">
            1
          </PaginationLink>
          <PaginationEllipsis />
          <PaginationLink aria-label="Goto page 45">45</PaginationLink>
          <PaginationLink aria-label="Page 46" current>
            46
          </PaginationLink>
          <PaginationLink aria-label="Goto page 47">47</PaginationLink>
          <PaginationEllipsis />
          <PaginationLink aria-label="Goto page 86">86</PaginationLink>
        </PaginationList>
      </Pagination>
    </Section>
  </>
)

export const PagerStyles: React.SFC = () => (
  <>
    <Title>Styles</Title>
    <Section>
      <Pagination rounded>
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
          <PaginationEllipsis />
          <PaginationLink aria-label="Goto page 86">86</PaginationLink>
        </PaginationList>
      </Pagination>
    </Section>
  </>
)

export const PagerSizes: React.SFC = () => (
  <>
    <Title>Sizes</Title>
    <Section>
      <Text textWeight="bold">normal</Text>
      <Pagination>
        <PaginationPrevious>Previous</PaginationPrevious>
        <PaginationNext>Next page</PaginationNext>
        <PaginationList>
          <PaginationLink current aria-label="Goto page 1">
            1
          </PaginationLink>
          <PaginationEllipsis />
          <PaginationLink aria-label="Goto page 45">45</PaginationLink>
          <PaginationLink aria-label="Page 46" current>
            46
          </PaginationLink>
          <PaginationLink aria-label="Goto page 47">47</PaginationLink>
          <PaginationEllipsis />
          <PaginationLink aria-label="Goto page 86">86</PaginationLink>
        </PaginationList>
      </Pagination>
    </Section>
    <Section>
      <Text textWeight="bold">small</Text>
      <Pagination size="small">
        <PaginationPrevious>Previous</PaginationPrevious>
        <PaginationNext>Next page</PaginationNext>
        <PaginationList>
          <PaginationLink current aria-label="Goto page 1">
            1
          </PaginationLink>
          <PaginationEllipsis />
          <PaginationLink aria-label="Goto page 45">45</PaginationLink>
          <PaginationLink aria-label="Page 46" current>
            46
          </PaginationLink>
          <PaginationLink aria-label="Goto page 47">47</PaginationLink>
          <PaginationEllipsis />
          <PaginationLink aria-label="Goto page 86">86</PaginationLink>
        </PaginationList>
      </Pagination>
    </Section>
    <Section>
      <Text textWeight="bold">medium</Text>
      <Pagination size="medium">
        <PaginationPrevious>Previous</PaginationPrevious>
        <PaginationNext>Next page</PaginationNext>
        <PaginationList>
          <PaginationLink current aria-label="Goto page 1">
            1
          </PaginationLink>
          <PaginationEllipsis />
          <PaginationLink aria-label="Goto page 45">45</PaginationLink>
          <PaginationLink aria-label="Page 46" current>
            46
          </PaginationLink>
          <PaginationLink aria-label="Goto page 47">47</PaginationLink>
          <PaginationEllipsis />
          <PaginationLink aria-label="Goto page 86">86</PaginationLink>
        </PaginationList>
      </Pagination>
    </Section>
    <Section>
      <Text textWeight="bold">large</Text>
      <Pagination size="large">
        <PaginationPrevious>Previous</PaginationPrevious>
        <PaginationNext>Next page</PaginationNext>
        <PaginationList>
          <PaginationLink current aria-label="Goto page 1">
            1
          </PaginationLink>
          <PaginationEllipsis />
          <PaginationLink aria-label="Goto page 45">45</PaginationLink>
          <PaginationLink aria-label="Page 46" current>
            46
          </PaginationLink>
          <PaginationLink aria-label="Goto page 47">47</PaginationLink>
          <PaginationEllipsis />
          <PaginationLink aria-label="Goto page 86">86</PaginationLink>
        </PaginationList>
      </Pagination>
    </Section>
  </>
)

export const DynamicPagination: React.SFC = () => {
  const [page, setPageChange] = useState(1)
  return (
    <>
      <Title>Dynamic Pagination(CurrentPage:{page})</Title>
      <SimplePagerView
        currentPage={page}
        maximumPages={20}
        onPageChange={setPageChange}
      />
    </>
  )
}

export const PaginationExample: React.SFC = () => (
  <Section>
    <DynamicPagination />
    <SimplePagination />
    <PagerAlignment />
    <PagerStyles />
    <PagerSizes />
  </Section>
)
