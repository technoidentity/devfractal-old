import React from 'react'
import { Column, Columns } from '../../columns'
import { Title } from '../../elements'
import { CheckBox, Field } from '../../form'
import { Section } from '../../layout'
import { logger } from '../common'

export const CheckBoxExample: React.SFC = () => (
  <div>
    <Columns columnCentered>
      <Column narrow>
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
