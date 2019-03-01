import * as React from 'react'
import { Button, Field, Section, Title } from '../../lib'
import { FinishFormPropType, StepItemComponent } from './internal'

export const FinishForm: ({
  socialValues,
  prevClick,
}: FinishFormPropType) => JSX.Element = ({
  socialValues,
  prevClick,
}: FinishFormPropType) => (
  <Section>
    <StepItemComponent activePage={4} />
    <Section textAlignment="centered">
      <Title size="4">Your account is now created!</Title>
    </Section>
    <Field groupModifier="grouped-centered">
      <Button
        variant="light"
        onClick={e => {
          e.persist()
          prevClick(socialValues)
        }}
      >
        Previous
      </Button>
      <Button variant="light" state="static">
        Next
      </Button>
    </Field>
  </Section>
)
