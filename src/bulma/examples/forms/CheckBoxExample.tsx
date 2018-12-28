import React from 'react'
import { Column, Columns } from '../../columns'
import { Box } from '../../elements'
import { CheckBox, Field, Label } from '../../form'
import { Section } from '../../layout'
import { logger } from '../common'

export const CheckBoxExample: React.SFC = () => (
  <div>
    <Columns columnCentered>
      <Column narrow>
        <Box>
          <Section>
            <Label>Normal checkbox</Label>
            <CheckBox readOnly checked>
              Remember me
            </CheckBox>
          </Section>
          <Section>
            <Label>Add links to checkbox</Label>
            <CheckBox
              onChange={() => {
                logger('CheckboxExample onChange')
              }}
            >
              I agree <a href="#">terms and conditions</a>
            </CheckBox>
          </Section>
          <Section>
            <Field>
              <Label>Disabled checkbox</Label>
              <CheckBox disabled>Save my Changes</CheckBox>
            </Field>
          </Section>
        </Box>
      </Column>
    </Columns>
  </div>
)
