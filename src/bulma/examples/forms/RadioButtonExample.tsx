import React from 'react'
import { Column, Columns } from '../../columns'
import { Box } from '../../elements'
import {
  FieldBody,
  FieldLabel,
  Label,
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
        <Box>
          <Section>
            <Label>Normal radioButton</Label>
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
            <Label>Checked radiobutton</Label>
            <RadioButton checked> Foo</RadioButton>
            <RadioButton> Bar</RadioButton>
          </Section>

          <Section>
            <Label>Disabled radioButton</Label>
            <RadioButton> Going</RadioButton>
            <RadioButton> Not going</RadioButton>
            <RadioButton disabled> May be</RadioButton>
          </Section>
        </Box>
      </Column>
    </Columns>
  </RadioButtonGroup>
)
