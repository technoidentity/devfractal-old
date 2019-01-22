import { faCheck, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import {
  Container,
  FieldBody,
  FieldLabel,
  FormField,
  Input,
  Section,
  SubTitle,
  Text,
  Title,
} from '../devfractal'

export const DynamicInputExample: React.SFC = () => {
  const [change, setChange] = useState('')
  return (
    <Section>
      <Title size="4">Dynamic Input(Upper case)</Title>
      <Input
        type="text"
        name="name"
        value={change}
        placeholder="Dynamic Input"
        onChange={evt => setChange(evt.target.value.toUpperCase())}
      />
    </Section>
  )
}

export const NormalInputExample: React.SFC = () => (
  <Section>
    <Title size="4">Normal Input</Title>
    <Input type="text" placeholder="Text input" />
  </Section>
)

export const InputColorsExample: React.SFC = () => (
  <Section>
    <Title size="4">Colors</Title>
    <Input variant="primary" type="text" placeholder="Primary input" />
    <Input variant="info" type="text" placeholder="Info input" />
    <Input variant="success" type="text" placeholder="Success input" />
    <Input variant="dark" type="text" placeholder="Dark input" />
    <Input variant="warning" type="text" placeholder="warning input" />
    <Input variant="light" type="text" placeholder="Light input" />
    <Input variant="danger" type="text" placeholder="Danger input" />
    <Input variant="white" type="text" placeholder="White input" />
    <Input variant="black" type="text" placeholder="Black input" />
  </Section>
)

export const InputSizesExample: React.SFC = () => (
  <Section>
    <Title size="4">Sizes</Title>
    <Input ctrlSize="small" type="text" placeholder="Small input" />
    <Input type="text" placeholder="Normal input" />
    <Input ctrlSize="medium" type="text" placeholder="Medium input" />
    <Input ctrlSize="large" type="text" placeholder="Large input" />
  </Section>
)

export const InputStyleExample: React.SFC = () => (
  <Section>
    <Title size="4">Styles</Title>
    <Input type="text" rounded placeholder="Rounded input" />
  </Section>
)

export const InputStateExample: React.SFC = () => (
  <Section>
    <Title size="4">States</Title>
    <Text>Hover</Text>
    <Input type="text" state="hovered" placeholder="Hovered input" />
    <Text>Focus</Text>
    <Input type="text" state="focused" placeholder="Focused input" />
    <Text>Loading</Text>
    <Input type="text" loading placeholder="Loading input" />
  </Section>
)

export const InputCombinationsExample: React.SFC = () => (
  <Section>
    <Input
      loading
      ctrlSize="small"
      type="text"
      placeholder="Small loading input"
    />
    <Input loading type="text" placeholder="Normal loading input" />
    <Input
      loading
      ctrlSize="medium"
      type="text"
      placeholder="Medium loading input"
    />
    <Input
      loading
      ctrlSize="large"
      type="text"
      placeholder="Large loading input"
    />
  </Section>
)

export const DisabledInputExample: React.SFC = () => (
  <Section>
    <Text textSize="4">Disabled</Text>
    <Input disabled placeholder="disabled input" />
  </Section>
)

export const ReadonlyStaticInputsExample: React.SFC = () => (
  <Section>
    <SubTitle size="4">Readonly and Static inputs</SubTitle>
    <Input type="text" value="This text is readonly" readOnly />
    <Container>
      <FormField horizontal>
        <FieldLabel fieldLabelSize="normal">From</FieldLabel>
        <FieldBody>
          <Input state="static" type="email" value="me@example.com" readOnly />
        </FieldBody>
      </FormField>

      <FormField horizontal>
        <FieldLabel fieldLabelSize="normal">To </FieldLabel>
        <FieldBody>
          <Input type="email" placeholder="Recipient email" />
        </FieldBody>
      </FormField>
    </Container>
  </Section>
)

export const FontAwesomeIconsExample: React.SFC = () => (
  <Section>
    <Title size="4">With Font Awsome icons</Title>
    <Input leftIcon={faUser} iconSize="small" type="text" placeholder="Name" />
    <Input
      leftIcon={faEnvelope}
      rightIcon={faCheck}
      iconSize="small"
      variant="success"
      type="email"
      placeholder="Email"
    />
  </Section>
)

export const MoreExamples: React.SFC = () => (
  <Section>
    <Input
      leftIcon={faEnvelope}
      rightIcon={faCheck}
      ctrlSize="small"
      variant="primary"
      type="email"
      placeholder="Email"
    />
    <Input
      leftIcon={faEnvelope}
      rightIcon={faCheck}
      variant="info"
      type="email"
      placeholder="Email"
    />
    <Input
      leftIcon={faEnvelope}
      rightIcon={faCheck}
      ctrlSize="medium"
      variant="warning"
      type="email"
      placeholder="Email"
    />
    <Input
      leftIcon={faEnvelope}
      rightIcon={faCheck}
      ctrlSize="large"
      variant="danger"
      type="email"
      placeholder="Email"
    />
  </Section>
)

export const InputExample: React.SFC = () => (
  <>
    <DynamicInputExample />
    <NormalInputExample />
    <InputColorsExample />
    <InputSizesExample />
    <InputStyleExample />
    <InputStateExample />
    <InputCombinationsExample />
    <DisabledInputExample />
    <ReadonlyStaticInputsExample />
    <FontAwesomeIconsExample />
    <MoreExamples />
  </>
)
