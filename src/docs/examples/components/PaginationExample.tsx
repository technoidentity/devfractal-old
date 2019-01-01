import React from 'react'
import {
  Pagination,
  PaginationEllipsis,
  PaginationLink,
  PaginationList,
  PaginationNext,
  PaginationPrevious,
} from '../../../devfractal/components'
import { Title } from '../../../devfractal/elements'
import { Section } from '../../../devfractal/layout'
import { Text } from '../../../devfractal/modifiers'

export const PaginationExample: React.SFC = () => (
  <>
    <Section>
      <Title>Pagination example</Title>
      <Section>
        <Pagination>
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
      </Section>
    </Section>
    <Section>
      <Title>Alignment</Title>
      <Section>
        <Pagination alignment="centered">
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
      </Section>
      <Section>
        <Pagination alignment="right">
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
      </Section>
      <Section>
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
              <PaginationEllipsis>&hellip</PaginationEllipsis>
              <PaginationLink aria-label="Goto page 86">86</PaginationLink>
            </PaginationList>
          </Pagination>
        </Section>
      </Section>
      <Section>
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
        </Section>
      </Section>
    </Section>
  </>
)
