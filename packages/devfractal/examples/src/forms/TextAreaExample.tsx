import { Section, TextArea as TextAreaComponent, Title } from '@stp/ui-core'
import React from 'react'

const DynamicTextAreaExample: React.FC = () => {
  const [change, setChange] = React.useState('')
  return (
    <Section>
      <Title size="4">Dynamic Textarea(Upper case)</Title>
      <TextAreaComponent
        name="message"
        value={change}
        placeholder="Dynamic Textarea"
        onChange={evt => setChange(evt.target.value.toUpperCase())}
      />
    </Section>
  )
}

const DefaultTextAreaExample: React.FC = () => (
  <Section>
    <Title size="4">Default Textarea</Title>
    <TextAreaComponent placeholder="Default textArea" />
  </Section>
)

const TextAreaColorsExample: React.FC = () => (
  <Section>
    <Title size="4">Colors</Title>
    <TextAreaComponent variant="primary" placeholder="Primary textarea" />
    <TextAreaComponent variant="info" placeholder="Info textarea" />
    <TextAreaComponent variant="success" placeholder="Success textarea" />
    <TextAreaComponent variant="warning" placeholder="Warning textarea" />
    <TextAreaComponent variant="danger" placeholder="Danger textarea" />
    <TextAreaComponent variant="light" placeholder="Light textarea" />
    <TextAreaComponent variant="dark" placeholder="Dark textarea" />
    <TextAreaComponent variant="black" placeholder="Black textarea" />
  </Section>
)

const TextAreaSizesExample: React.FC = () => (
  <Section>
    <Title size="4">Sizes</Title>
    <TextAreaComponent ctrlSize="small" placeholder="Small textarea" />
    <TextAreaComponent placeholder="Normal textarea" />
    <TextAreaComponent ctrlSize="medium" placeholder="Medium textarea" />
    <TextAreaComponent ctrlSize="large" placeholder="Large textarea" />
  </Section>
)

const TextAreaStatesExample: React.FC = () => (
  <Section>
    <Title size="4">States</Title>
    <TextAreaComponent placeholder="Normal textarea" />
    <TextAreaComponent state="active" placeholder="Active textarea" />
    <TextAreaComponent state="hovered" placeholder="Hovered textarea" />
    <TextAreaComponent state="focused" placeholder="Focused textarea" />
    <TextAreaComponent loading placeholder="Loading textarea" />
  </Section>
)

const CombineStylesOfTextAreaExample: React.FC = () => (
  <Section>
    <Title size="4">Resize Loading Spinner</Title>
    <TextAreaComponent
      loading
      ctrlSize="small"
      placeholder="Small loading textarea"
    />
    <TextAreaComponent loading placeholder="Normal loading textarea" />
    <TextAreaComponent
      loading
      ctrlSize="medium"
      placeholder="Medium loading textarea"
    />
    <TextAreaComponent
      loading
      ctrlSize="large"
      placeholder="Large loading textarea"
    />
  </Section>
)

const DisabledTextAreaExample: React.FC = () => (
  <Section>
    <Title size="4">Disabled</Title>
    <TextAreaComponent disabled placeholder="Disabled textarea" />
  </Section>
)

const FixedSizeTextAreaExample: React.FC = () => (
  <Section>
    <Title size="4">Fixed Size</Title>
    <TextAreaComponent fixedSize />
  </Section>
)

const TextAreaRowSizeExample: React.FC = () => (
  <Section>
    <Title size="4">Height</Title>
    <TextAreaComponent rows={10} />
  </Section>
)

const ReadonlyTextAreaExample: React.FC = () => (
  <Section>
    <Title size="4">Readonly</Title>
    <TextAreaComponent readOnly value="The content is Readonly" />
  </Section>
)

export const TextArea: React.FC = () => (
  <>
    <DynamicTextAreaExample />
    <DefaultTextAreaExample />
    <TextAreaColorsExample />
    <TextAreaSizesExample />
    <TextAreaStatesExample />
    <CombineStylesOfTextAreaExample />
    <FixedSizeTextAreaExample />
    <DisabledTextAreaExample />
    <TextAreaRowSizeExample />
    <ReadonlyTextAreaExample />
  </>
)
