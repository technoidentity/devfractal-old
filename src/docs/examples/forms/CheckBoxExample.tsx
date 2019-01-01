import React from 'react'
import { Value } from 'react-powerplug'
import { Column, Columns } from '../../../devfractal/columns'
import { Title } from '../../../devfractal/elements'
import { CheckBox, Field } from '../../../devfractal/form'
import { Section } from '../../../devfractal/layout'
import { logger } from '../common'

export const DynamicCheckBox: React.SFC = () => (
  <Value initial={{ checked: false }}>
    {({ value, set }) => (
      <CheckBox
        checked={value.checked}
        onChange={() => {
          set({ checked: !value.checked })
        }}
      >
        {value.checked ? ' Checked' : ' UnChecked'}
      </CheckBox>
    )}
  </Value>
)
export const CheckBoxExample: React.SFC = () => (
  <div>
    <Columns columnCentered>
      <Column narrow>
        <Section>
          <Title size="4">Dynamic Checkbox</Title>
          <DynamicCheckBox />
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
