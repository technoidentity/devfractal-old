import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faStepBackward,
  faStepForward,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Icon } from '../elements'
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
      <Button
        variant="white"
        disabled={currentPage === 1}
        onClick={() => onPageChange(1)}
      >
        <Icon icon={faStepBackward} />
      </Button>
      <Button
        variant="white"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <Icon icon={faAngleDoubleLeft} />
      </Button>
      <Button
        variant="white"
        disabled={currentPage === maximumPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <Icon icon={faAngleDoubleRight} />
      </Button>
      <Button
        variant="white"
        disabled={currentPage === maximumPages}
        onClick={() => onPageChange(maximumPages)}
      >
        <Icon icon={faStepForward} />
      </Button>
    </Field>
  </Section>
)
