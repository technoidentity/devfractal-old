import { faCheck, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {
  Container,
  FieldBody,
  FieldLabel,
  FormField,
  Input as InputComponent,
  Section,
  SubTitle,
  Text,
  Title,
} from 'technoidentity-devfractal'

const DynamicInputExample: React.FC = () => {
  const [change, setChange] = React.useState('')
  return (
    <Section>
      <Title size="4">Dynamic Input(Upper case)</Title>
      <InputComponent
        type="text"
        name="name"
        value={change}
        placeholder="Dynamic Input"
        onChange={evt => setChange(evt.target.value.toUpperCase())}
      />
    </Section>
  )
}

const NormalInputExample: React.FC = () => (
  <Section>
    <Title size="4">Normal Input</Title>
    <InputComponent type="text" placeholder="Text input" />
  </Section>
)

const InputColorsExample: React.FC = () => (
  <Section>
    <Title size="4">Colors</Title>
    <InputComponent variant="primary" type="text" placeholder="Primary input" />
    <InputComponent variant="info" type="text" placeholder="Info input" />
    <InputComponent variant="success" type="text" placeholder="Success input" />
    <InputComponent variant="dark" type="text" placeholder="Dark input" />
    <InputComponent variant="warning" type="text" placeholder="warning input" />
    <InputComponent variant="light" type="text" placeholder="Light input" />
    <InputComponent variant="danger" type="text" placeholder="Danger input" />
    <InputComponent variant="white" type="text" placeholder="White input" />
    <InputComponent variant="black" type="text" placeholder="Black input" />
  </Section>
)

const InputSizesExample: React.FC = () => (
  <Section>
    <Title size="4">Sizes</Title>
    <InputComponent ctrlSize="small" type="text" placeholder="Small input" />
    <InputComponent type="text" placeholder="Normal input" />
    <InputComponent ctrlSize="medium" type="text" placeholder="Medium input" />
    <InputComponent ctrlSize="large" type="text" placeholder="Large input" />
  </Section>
)

const InputStyleExample: React.FC = () => (
  <Section>
    <Title size="4">Styles</Title>
    <InputComponent type="text" rounded placeholder="Rounded input" />
  </Section>
)

const InputStateExample: React.FC = () => (
  <Section>
    <Title size="4">States</Title>
    <Text>Hover</Text>
    <InputComponent type="text" state="hovered" placeholder="Hovered input" />
    <Text>Focus</Text>
    <InputComponent type="text" state="focused" placeholder="Focused input" />
    <Text>Loading</Text>
    <InputComponent type="text" loading placeholder="Loading input" />
  </Section>
)

const InputCombinationsExample: React.FC = () => (
  <Section>
    <InputComponent
      loading
      ctrlSize="small"
      type="text"
      placeholder="Small loading input"
    />
    <InputComponent loading type="text" placeholder="Normal loading input" />
    <InputComponent
      loading
      ctrlSize="medium"
      type="text"
      placeholder="Medium loading input"
    />
    <InputComponent
      loading
      ctrlSize="large"
      type="text"
      placeholder="Large loading input"
    />
  </Section>
)

const DisabledInputExample: React.FC = () => (
  <Section>
    <Text textSize="4">Disabled</Text>
    <InputComponent disabled placeholder="disabled input" />
  </Section>
)

const ReadonlyStaticInputsExample: React.FC = () => (
  <Section>
    <SubTitle size="4">Readonly and Static inputs</SubTitle>
    <InputComponent type="text" value="This text is readonly" readOnly />
    <Container>
      <FormField horizontal>
        <FieldLabel fieldLabelSize="normal">From</FieldLabel>
        <FieldBody>
          <InputComponent
            state="static"
            type="email"
            value="me@example.com"
            readOnly
          />
        </FieldBody>
      </FormField>

      <FormField horizontal>
        <FieldLabel fieldLabelSize="normal">To </FieldLabel>
        <FieldBody>
          <InputComponent type="email" placeholder="Recipient email" />
        </FieldBody>
      </FormField>
    </Container>
  </Section>
)

const FontAwesomeIconsExample: React.FC = () => (
  <Section>
    <Title size="4">With Font Awesome icons</Title>
    <InputComponent
      leftIcon={faUser}
      iconSize="small"
      type="text"
      placeholder="Name"
    />
    <InputComponent
      leftIcon={faEnvelope}
      rightIcon={faCheck}
      iconSize="small"
      variant="success"
      type="email"
      placeholder="Email"
    />
  </Section>
)

const MoreExamples: React.FC = () => (
  <Section>
    <InputComponent
      leftIcon={faEnvelope}
      rightIcon={faCheck}
      ctrlSize="small"
      variant="primary"
      type="email"
      placeholder="Email"
    />
    <InputComponent
      leftIcon={faEnvelope}
      rightIcon={faCheck}
      variant="info"
      type="email"
      placeholder="Email"
    />
    <InputComponent
      leftIcon={faEnvelope}
      rightIcon={faCheck}
      ctrlSize="medium"
      variant="warning"
      type="email"
      placeholder="Email"
    />
    <InputComponent
      leftIcon={faEnvelope}
      rightIcon={faCheck}
      ctrlSize="large"
      variant="danger"
      type="email"
      placeholder="Email"
    />
  </Section>
)

export const Input: React.FC = () => (
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
