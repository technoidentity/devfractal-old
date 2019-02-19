import React, { useState } from 'react'
import {
  Column,
  Columns,
  FieldBody,
  FieldLabel,
  FormField,
  Radio,
  RadioGroup,
  Section,
  State,
  Title,
} from '../devfractal'

export const DynamicRadioExample: React.SFC = () => {
  const [select, setSelect] = useState('red')

  return (
    <Section>
      <Title size="4">Controlled Radio({select})</Title>
      <RadioGroup
        name="radio"
        selected={select}
        onChange={evt => {
          setSelect(evt.value || 'red')
        }}
      >
        <Radio value="red"> Red</Radio>
        <Radio value="green"> Green</Radio>
        <Radio value="blue"> Blue</Radio>
      </RadioGroup>
    </Section>
  )
}

export const RadioExamples: React.SFC = () => {
  return (
    <Columns>
      <Column narrow>
        <Section>
          <Title size="4">Radio button</Title>
          <FormField horizontal>
            <FieldLabel>Gender</FieldLabel>
            <FieldBody>
              <RadioGroup name="gender">
                <Radio> Male</Radio>
                <Radio> Female</Radio>
              </RadioGroup>
            </FieldBody>
          </FormField>
          <hr />
        </Section>

        <Section>
          <Title size="4">
            Radio button with <em>female</em> as default
          </Title>
          <FormField horizontal>
            <FieldLabel>Gender</FieldLabel>
            <FieldBody>
              <RadioGroup name="gender2" defaultValue="female">
                <Radio value="male"> Male</Radio>
                <Radio value="female"> Female</Radio>
              </RadioGroup>
            </FieldBody>
          </FormField>
          <hr />
        </Section>

        <Section>
          <Title size="4">Disabled </Title>
          <RadioGroup name="going">
            <Radio> Going</Radio>
            <Radio disabled> May be</Radio>
          </RadioGroup>
          <hr />
        </Section>

        <Section>
          <Title size="4">Controlled Radio</Title>
          <State initial={'green'}>
            {({ value, set }) => (
              <RadioGroup
                name="color"
                selected={value}
                onChange={({ value }) => set(value || 'red')}
              >
                <Radio value="red"> Red</Radio>
                <Radio value="green"> Green</Radio>
                <Radio value="blue"> Blue</Radio>
              </RadioGroup>
            )}
          </State>
          <hr />
        </Section>
        <Section>
          <Title size="4">Controlled Readonly Radio</Title>
          <RadioGroup name="color2" selected="green" readOnly>
            <Radio value="red"> Red</Radio>
            <Radio value="green"> Green</Radio>
            <Radio value="blue"> Blue</Radio>
          </RadioGroup>
          <hr />
        </Section>

        <Section>
          <Title size="4">Uncontrolled Radio</Title>
          <RadioGroup name="color3">
            <Radio value="red"> Red</Radio>
            <Radio value="green"> Green</Radio>
            <Radio value="blue"> Blue</Radio>
          </RadioGroup>
        </Section>
      </Column>
    </Columns>
  )
}

export const RadioExample: React.SFC = () => (
  <>
    <DynamicRadioExample />
    <RadioExamples />
  </>
)
