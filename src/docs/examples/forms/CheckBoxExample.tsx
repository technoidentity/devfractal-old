import React, { useState } from 'react'
import { logger } from '../common'
import { CheckBox, Column, Columns, Field, Section, Title } from '../devfractal'

export const CheckBoxExample: React.SFC = () => {
  const [checked, setChecked] = useState(false)
  return (
    <div>
      <Columns columnCentered>
        <Column narrow>
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

          <Section>
            <Title size="4">Checkbox</Title>
            <CheckBox readOnly checked>
              {' '}
              Remember me
            </CheckBox>
          </Section>
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
          <Section>
            <Field>
              <Title size="4">Disabled </Title>
              <CheckBox disabled> Save my Changes</CheckBox>
            </Field>
          </Section>
        </Column>
      </Columns>
    </div>
  )
}
