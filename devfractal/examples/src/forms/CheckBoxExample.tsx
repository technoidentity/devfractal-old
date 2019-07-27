import React from 'react'
import {
  CheckBox as CheckBoxComponent,
  Field,
  Section,
  Title,
} from 'technoidentity-devfractal'

const DynamicCheckBoxExample: React.FC = () => {
  const [checked, setChecked] = React.useState(false)
  return (
    <Section>
      <Title size="4">Dynamic Checkbox</Title>
      <CheckBoxComponent
        name="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      >
        {' '}
        {checked ? 'Checked' : 'UnChecked'}
      </CheckBoxComponent>
    </Section>
  )
}

const BasicCheckBoxExample: React.FC = () => (
  <Section>
    <Title size="4">Checkbox</Title>
    <CheckBoxComponent readOnly checked>
      {' '}
      Remember me
    </CheckBoxComponent>
  </Section>
)

const AddLinksExample: React.FC = () => (
  <Section>
    <Title size="4">Add links </Title>
    <CheckBoxComponent
      onChange={() => {
        console.log('CheckboxExample onChange')
      }}
    >
      {' '}
      I agree <a href="#!">terms and conditions</a>
    </CheckBoxComponent>
  </Section>
)

const DisabledCheckBoxExample: React.FC = () => (
  <Section>
    <Field>
      <Title size="4">Disabled </Title>
      <CheckBoxComponent disabled> Save my Changes</CheckBoxComponent>
    </Field>
  </Section>
)

export const CheckBox: React.FC = () => (
  <>
    <DynamicCheckBoxExample />
    <BasicCheckBoxExample />
    <AddLinksExample />
    <DisabledCheckBoxExample />
  </>
)
