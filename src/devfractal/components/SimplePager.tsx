import React from 'react'
import { Button, Field } from '../form'
import { Section } from '../layout'

interface PagerViewProps {
  readonly currentPage: number
  readonly maximumPages: number
  onPageChange(nextPage: number): void
}

export const SimplePagerView: React.SFC<PagerViewProps> = ({
  currentPage,
  maximumPages,
  onPageChange,
}) => (
  <Section>
    <Field groupModifier="grouped-right">
      <Button variant="info" onClick={() => onPageChange(1)}>
        First
      </Button>
      <Button
        variant="info"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </Button>
      <Button
        variant="info"
        disabled={currentPage === maximumPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </Button>
      <Button
        variant="info"
        disabled={currentPage === maximumPages}
        onClick={() => onPageChange(maximumPages)}
      >
        Last
      </Button>
    </Field>
  </Section>
)
