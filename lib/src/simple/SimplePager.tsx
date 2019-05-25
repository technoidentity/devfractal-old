import React from 'react'
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaStepBackward,
  FaStepForward,
} from 'react-icons/fa'
import { Button, Field, Section } from '../lib'

interface PagerViewProps {
  readonly currentPage: number
  readonly maximumPages: number
  onPageChange(nextPage: number): void
}

export const SimplePagerView: React.FC<PagerViewProps> = ({
  currentPage,
  maximumPages,
  onPageChange,
}) => (
  <Section>
    <Field groupModifier="grouped-right">
      <Button
        variant="white"
        disabled={currentPage === 1}
        onClick={() => onPageChange(1)}
      >
        <FaStepBackward />
      </Button>
      <Button
        variant="white"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <FaAngleDoubleLeft />
      </Button>
      <Button
        variant="white"
        disabled={currentPage === maximumPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <FaAngleDoubleRight />
      </Button>
      <Button
        variant="white"
        disabled={currentPage === maximumPages}
        onClick={() => onPageChange(maximumPages)}
      >
        <FaStepForward />
      </Button>
    </Field>
  </Section>
)
