import React from 'react'
import { State } from '../../../utils'
import {
  Column,
  Columns,
  FieldBody,
  FieldLabel,
  FormField,
  Radio,
  RadioGroup,
  Section,
  Title,
} from '../devfractal'

export const RadioExample: React.SFC = () => (
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
        <Title size="4">Checked </Title>
        <RadioGroup name="foobar" defaultValue="bar" readOnly>
          <Radio value="foo"> Foo</Radio>
          <Radio value="bar"> Bar</Radio>
        </RadioGroup>
        <hr />
      </Section>

      <Section>
        <Title size="4">Disabled </Title>
        <RadioGroup name="going">
          <Radio> Going</Radio>
          <Radio> Not going</Radio>
          <Radio disabled> May be</Radio>
        </RadioGroup>
        <hr />
      </Section>

      <Section>
        <Title size="4">Controlled Radio</Title>
        <State initial={'red'}>
          {({ value, set }) => (
            <RadioGroup
              name="color"
              selected={value}
              onChange={evt => set(evt.target.value)}
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
        <Title size="4">Controlled readonly Radio</Title>
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
