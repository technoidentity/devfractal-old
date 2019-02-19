import React, { useState } from 'react'
import { Section, TextArea, Title } from '../devfractal'

export const DynamicTextAreaExample: React.SFC = () => {
  const [change, setChange] = useState('')
  return (
    <Section>
      <Title size="4">Dynamic Textarea(Upper case)</Title>
      <TextArea
        name="message"
        value={change}
        placeholder="Dynamic Textarea"
        onChange={evt => setChange(evt.target.value.toUpperCase())}
      />
    </Section>
  )
}

export const DefaultTextAreaExample: React.SFC = () => (
  <Section>
    <Title size="4">Default Textarea</Title>
    <TextArea placeholder="Default textArea" />
  </Section>
)

export const TextAreaColorsExample: React.SFC = () => (
  <Section>
    <Title size="4">Colors</Title>
    <TextArea variant="primary" placeholder="Primary textarea" />
    <TextArea variant="info" placeholder="Info textarea" />
    <TextArea variant="success" placeholder="Success textarea" />
    <TextArea variant="warning" placeholder="Warning textarea" />
    <TextArea variant="danger" placeholder="Danger textarea" />
    <TextArea variant="light" placeholder="Light textarea" />
    <TextArea variant="dark" placeholder="Dark textarea" />
    <TextArea variant="black" placeholder="Black textarea" />
  </Section>
)

export const TextAreaSizesExample: React.SFC = () => (
  <Section>
    <Title size="4">Sizes</Title>
    <TextArea ctrlSize="small" placeholder="Small textarea" />
    <TextArea placeholder="Normal textarea" />
    <TextArea ctrlSize="medium" placeholder="Medium textarea" />
    <TextArea ctrlSize="large" placeholder="Large textarea" />
  </Section>
)

export const TextAreaStatesExample: React.SFC = () => (
  <Section>
    <Title size="4">States</Title>
    <TextArea placeholder="Normal textarea" />
    <TextArea state="active" placeholder="Active textarea" />
    <TextArea state="hovered" placeholder="Hovered textarea" />
    <TextArea state="focused" placeholder="Focused textarea" />
    <TextArea loading placeholder="Loading textarea" />
  </Section>
)

export const CombineStylesOfTextAreaExample: React.SFC = () => (
  <Section>
    <Title size="4">Resize Loading Spinner</Title>
    <TextArea loading ctrlSize="small" placeholder="Small loading textarea" />
    <TextArea loading placeholder="Normal loading textarea" />
    <TextArea loading ctrlSize="medium" placeholder="Medium loading textarea" />
    <TextArea loading ctrlSize="large" placeholder="Large loading textarea" />
  </Section>
)

export const DisabledTextAreaExample: React.SFC = () => (
  <Section>
    <Title size="4">Disabled</Title>
    <TextArea disabled placeholder="Disabled textarea" />
  </Section>
)

export const FixedSizeTextAreaExample: React.SFC = () => (
  <Section>
    <Title size="4">Fixed Size</Title>
    <TextArea fixedSize />
  </Section>
)

export const TextAreaRowSizeExample: React.SFC = () => (
  <Section>
    <Title size="4">Height</Title>
    <TextArea rows={10} />
  </Section>
)

export const ReadonlyTextAreaExample: React.SFC = () => (
  <Section>
    <Title size="4">Readonly</Title>
    <TextArea readOnly value="The content is Readonly" />
  </Section>
)

export const TextAreaExample: React.SFC = () => (
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
