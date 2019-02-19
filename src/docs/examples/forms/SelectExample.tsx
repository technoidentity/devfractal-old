import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { Field, Section, Select, Text, Title } from '../devfractal'

export const DynamicSelectExample: React.SFC = () => {
  const [select, setSelect] = useState('red')
  return (
    <Section>
      <Title size="4">Dynamic Select({select})</Title>
      <Select name={select} onChange={evt => setSelect(evt.target.value)}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="purple">Purple</option>
      </Select>
    </Section>
  )
}

export const BasicSelectExample: React.SFC = () => (
  <Section>
    <Title size="4">Select</Title>
    <Select>
      <option>Red</option>
      <option>Blue</option>
      <option>Green</option>
      <option>Purple</option>
    </Select>
  </Section>
)

export const SelectColorExample: React.SFC = () => (
  <Section>
    <Field>
      <Title size="4">Colors</Title>
      <Select variant="primary">
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
    <Field>
      <Select variant="info">
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
    <Field>
      <Select variant="success">
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
    <Field>
      <Select variant="warning">
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
    <Field>
      <Select variant="danger">
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
  </Section>
)

export const SelectSizeExample: React.SFC = () => (
  <Section>
    <Field>
      <Title size="4">Sizes</Title>
      <Select ctrlSize="small">
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
    <Field>
      <Select ctrlSize="medium">
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
    <Field>
      <Select ctrlSize="large">
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
    <Field>
      <Select>
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
  </Section>
)

export const SelectStyleExample: React.SFC = () => (
  <Section>
    <Field>
      <Title size="4">Style</Title>
      <Select rounded>
        <option>Rounded dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
  </Section>
)

export const SelectStateExample: React.SFC = () => (
  <Section>
    <Field>
      <Title size="4">States</Title>
      <Field>
        <Text>Normal</Text>
        <Select state="focused">
          <option>Select dropdown</option>
          <option>With options</option>
        </Select>
      </Field>
      <Text>Hover</Text>
      <Select state="hovered">
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
    <Field>
      <Text>Focus</Text>
      <Select state="focused">
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
    <Field>
      <Text>Loading</Text>
      <Select loading>
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
  </Section>
)

export const WithIconsExample: React.SFC = () => (
  <Section>
    <Field>
      <Title size="4">With icons</Title>
      <Select leftIcon={faGlobe} ctrlSize="small">
        <option>Country</option>
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
    <Field>
      <Select leftIcon={faGlobe}>
        <option>Country</option>
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
    <Field>
      <Select leftIcon={faGlobe} ctrlSize="medium">
        <option>Country</option>
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
  </Section>
)

export const SelectExample: React.SFC = () => (
  <>
    <DynamicSelectExample />
    <BasicSelectExample />
    <SelectColorExample />
    <SelectSizeExample />
    <SelectStyleExample />
    <SelectStateExample />
    <WithIconsExample />
  </>
)
