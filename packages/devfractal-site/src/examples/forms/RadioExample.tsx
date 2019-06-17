import React, { useState } from 'react'
import {
  Column,
  Columns,
  FieldBody,
  FieldLabel,
  FormField,
  Radio as RadioComponent,
  RadioGroup,
  Section,
  State,
  Title,
} from 'technoidentity-devfractal'

const DynamicRadioExample: React.FC = () => {
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
        <RadioComponent value="red"> Red</RadioComponent>
        <RadioComponent value="green"> Green</RadioComponent>
        <RadioComponent value="blue"> Blue</RadioComponent>
      </RadioGroup>
    </Section>
  )
}

const RadioExamples: React.FC = () => {
  return (
    <Columns>
      <Column narrow>
        <Section>
          <Title size="4">Radio button</Title>
          <FormField horizontal>
            <FieldLabel>Gender</FieldLabel>
            <FieldBody>
              <RadioGroup name="gender">
                <RadioComponent> Male</RadioComponent>
                <RadioComponent> Female</RadioComponent>
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
                <RadioComponent value="male"> Male</RadioComponent>
                <RadioComponent value="female"> Female</RadioComponent>
              </RadioGroup>
            </FieldBody>
          </FormField>
          <hr />
        </Section>

        <Section>
          <Title size="4">Disabled </Title>
          <RadioGroup name="going">
            <RadioComponent> Going</RadioComponent>
            <RadioComponent disabled> May be</RadioComponent>
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
                <RadioComponent value="red"> Red</RadioComponent>
                <RadioComponent value="green"> Green</RadioComponent>
                <RadioComponent value="blue"> Blue</RadioComponent>
              </RadioGroup>
            )}
          </State>
          <hr />
        </Section>
        <Section>
          <Title size="4">Controlled Readonly Radio</Title>
          <RadioGroup name="color2" selected="green" readOnly>
            <RadioComponent value="red"> Red</RadioComponent>
            <RadioComponent value="green"> Green</RadioComponent>
            <RadioComponent value="blue"> Blue</RadioComponent>
          </RadioGroup>
          <hr />
        </Section>

        <Section>
          <Title size="4">Uncontrolled Radio</Title>
          <RadioGroup name="color3">
            <RadioComponent value="red"> Red</RadioComponent>
            <RadioComponent value="green"> Green</RadioComponent>
            <RadioComponent value="blue"> Blue</RadioComponent>
          </RadioGroup>
        </Section>
      </Column>
    </Columns>
  )
}

export const Radio: React.FC = () => (
  <>
    <DynamicRadioExample />
    <RadioExamples />
  </>
)
