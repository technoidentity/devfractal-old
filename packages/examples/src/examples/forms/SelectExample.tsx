import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import {
  Field,
  Section,
  Select as SelectComponent,
  Text,
  Title,
} from 'technoidentity-devfractal'

const DynamicSelectExample: React.FC = () => {
  const [select, setSelect] = useState('red')
  return (
    <Section>
      <Title size="4">Dynamic Select({select})</Title>
      <SelectComponent
        name={select}
        onChange={evt => setSelect(evt.target.value)}
      >
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="purple">Purple</option>
      </SelectComponent>
    </Section>
  )
}

const BasicSelectExample: React.FC = () => (
  <Section>
    <Title size="4">Select</Title>
    <SelectComponent>
      <option>Red</option>
      <option>Blue</option>
      <option>Green</option>
      <option>Purple</option>
    </SelectComponent>
  </Section>
)

const SelectColorExample: React.FC = () => (
  <Section>
    <Field>
      <Title size="4">Colors</Title>
      <SelectComponent variant="primary">
        <option>Select dropdown</option>
        <option>With options</option>
      </SelectComponent>
    </Field>
    <Field>
      <SelectComponent variant="info">
        <option>Select dropdown</option>
        <option>With options</option>
      </SelectComponent>
    </Field>
    <Field>
      <SelectComponent variant="success">
        <option>Select dropdown</option>
        <option>With options</option>
      </SelectComponent>
    </Field>
    <Field>
      <SelectComponent variant="warning">
        <option>Select dropdown</option>
        <option>With options</option>
      </SelectComponent>
    </Field>
    <Field>
      <SelectComponent variant="danger">
        <option>Select dropdown</option>
        <option>With options</option>
      </SelectComponent>
    </Field>
  </Section>
)

const SelectSizeExample: React.FC = () => (
  <Section>
    <Field>
      <Title size="4">Sizes</Title>
      <SelectComponent ctrlSize="small">
        <option>Select dropdown</option>
        <option>With options</option>
      </SelectComponent>
    </Field>
    <Field>
      <SelectComponent ctrlSize="medium">
        <option>Select dropdown</option>
        <option>With options</option>
      </SelectComponent>
    </Field>
    <Field>
      <SelectComponent ctrlSize="large">
        <option>Select dropdown</option>
        <option>With options</option>
      </SelectComponent>
    </Field>
    <Field>
      <SelectComponent>
        <option>Select dropdown</option>
        <option>With options</option>
      </SelectComponent>
    </Field>
  </Section>
)

const SelectStyleExample: React.FC = () => (
  <Section>
    <Field>
      <Title size="4">Style</Title>
      <SelectComponent rounded>
        <option>Rounded dropdown</option>
        <option>With options</option>
      </SelectComponent>
    </Field>
  </Section>
)

const SelectStateExample: React.FC = () => (
  <Section>
    <Field>
      <Title size="4">States</Title>
      <Field>
        <Text>Normal</Text>
        <SelectComponent state="focused">
          <option>Select dropdown</option>
          <option>With options</option>
        </SelectComponent>
      </Field>
      <Text>Hover</Text>
      <SelectComponent state="hovered">
        <option>Select dropdown</option>
        <option>With options</option>
      </SelectComponent>
    </Field>
    <Field>
      <Text>Focus</Text>
      <SelectComponent state="focused">
        <option>Select dropdown</option>
        <option>With options</option>
      </SelectComponent>
    </Field>
    <Field>
      <Text>Loading</Text>
      <SelectComponent loading>
        <option>Select dropdown</option>
        <option>With options</option>
      </SelectComponent>
    </Field>
  </Section>
)

const WithIconsExample: React.FC = () => (
  <Section>
    <Field>
      <Title size="4">With icons</Title>
      <SelectComponent leftIcon={faGlobe} ctrlSize="small">
        <option>Country</option>
        <option>Select dropdown</option>
        <option>With options</option>
      </SelectComponent>
    </Field>
    <Field>
      <SelectComponent leftIcon={faGlobe}>
        <option>Country</option>
        <option>Select dropdown</option>
        <option>With options</option>
      </SelectComponent>
    </Field>
    <Field>
      <SelectComponent leftIcon={faGlobe} ctrlSize="medium">
        <option>Country</option>
        <option>Select dropdown</option>
        <option>With options</option>
      </SelectComponent>
    </Field>
  </Section>
)

export const Select: React.FC = () => (
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
