import * as React from 'react'
import { RadioButtonGroup } from '../form/RadioButtonGroup'
import { RadioButton } from '../form'

export const RadioButtonExample: React.SFC = () => (
  <RadioButtonGroup>
    <RadioButton checked readOnly>
      {' '}
      yes
    </RadioButton>
    <RadioButton disabled> No</RadioButton>
    <RadioButton disabled> No</RadioButton>
  </RadioButtonGroup>
)
