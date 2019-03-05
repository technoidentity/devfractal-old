import React, { useState } from 'react'
import { logger } from '../common'
import { CheckBox, Field, Section, Title } from '../devfractal'

export const DynamicCheckBoxExample: React.FunctionComponent = () => {
  const [checked, setChecked] = useState(false)
  return (
    <Section>
      <Title size="4">Dynamic Checkbox</Title>
      <CheckBox
        name="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      >
        {' '}
        {checked ? 'Checked' : 'UnChecked'}
      </CheckBox>
    </Section>
  )
}

export const BasicCheckBoxExample: React.FunctionComponent = () => (
  <Section>
    <Title size="4">Checkbox</Title>
    <CheckBox readOnly checked>
      {' '}
      Remember me
    </CheckBox>
  </Section>
)

export const AddLinksExample: React.FunctionComponent = () => (
  <Section>
    <Title size="4">Add links </Title>
    <CheckBox
      onChange={() => {
        logger('CheckboxExample onChange')
      }}
    >
      {' '}
      I agree <a href="#">terms and conditions</a>
    </CheckBox>
  </Section>
)

export const DisabledCheckBoxExample: React.FunctionComponent = () => (
  <Section>
    <Field>
      <Title size="4">Disabled </Title>
      <CheckBox disabled> Save my Changes</CheckBox>
    </Field>
  </Section>
)

export const CheckBoxExample: React.FunctionComponent = () => (
  <>
    <DynamicCheckBoxExample />
    <BasicCheckBoxExample />
    <AddLinksExample />
    <DisabledCheckBoxExample />
  </>
)
