import React from 'react'
import { Column, Columns } from '../../columns'
import { Title } from '../../elements'
import {
  FieldBody,
  FieldLabel,
  RadioButton,
  RadioButtonGroup,
} from '../../form'
import { FormField } from '../../form/FormField'
import { Section } from '../../layout'
import { logger } from '../common'

export const RadioButtonExample: React.SFC = () => (
  <RadioButtonGroup>
    <Columns columnCentered>
      <Column narrow>
        <Section>
          <Title size="4">Radiobutton</Title>
          <FormField horizontal>
            <FieldLabel>Gender</FieldLabel>
            <FieldBody>
              <RadioButton
                onChange={() => {
                  logger('RadiobuttonExample onChange')
                }}
              >
                {' '}
                Male
              </RadioButton>
              <RadioButton> Female</RadioButton>
            </FieldBody>
          </FormField>
        </Section>
        <Section>
          <Title size="4">Checked </Title>
          <RadioButton checked readOnly>
            {' '}
            Foo
          </RadioButton>
          <RadioButton> Bar</RadioButton>
        </Section>

        <Section>
          <Title size="4">Disabled </Title>
          <RadioButton> Going</RadioButton>
          <RadioButton> Not going</RadioButton>
          <RadioButton disabled> May be</RadioButton>
        </Section>
      </Column>
    </Columns>
  </RadioButtonGroup>
)
