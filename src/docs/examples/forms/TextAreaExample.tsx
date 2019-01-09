import React from 'react'
import { Value } from '../../../utils'
import { Column, Columns, Section, TextArea, Title } from '../devfractal'

export const DynamicTextarea: React.SFC = () => (
  <Value initial={{ message: '' }}>
    {({ value, set }) => (
      <TextArea
        value={value.message}
        onChange={evt => set({ message: evt.target.value.toUpperCase() })}
        placeholder="Dynamic textArea"
      />
    )}
  </Value>
)

export const TextAreaExample: React.SFC = () => (
  <div>
    <Columns columnCentered>
      <Column size="three-quarters">
        <Section>
          <Title size="4">Dynamic Textarea(Upper case)</Title>
          <DynamicTextarea />
        </Section>
        <Section>
          <Title size="4">Default Textarea</Title>
          <TextArea placeholder="Default textArea" />
        </Section>
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
        <Section>
          <Title size="4">Sizes</Title>
          <TextArea ctrlSize="small" placeholder="Small textarea" />
          <TextArea placeholder="Normal textarea" />
          <TextArea ctrlSize="medium" placeholder="Medium textarea" />
          <TextArea ctrlSize="large" placeholder="Large textarea" />
        </Section>
        <Section>
          <Title size="4">States</Title>
          <TextArea placeholder="Normal textarea" />
          <TextArea state="active" placeholder="Active textarea" />
          <TextArea state="hovered" placeholder="Hovered textarea" />
          <TextArea state="focused" placeholder="Focused textarea" />
          <TextArea loading placeholder="Loading textarea" />
          <TextArea disabled placeholder="Disabled textarea" />
        </Section>
        <Section>
          <Title size="4">Resize Loading Spinner</Title>
          <TextArea
            loading
            ctrlSize="small"
            placeholder="Small loading textarea"
          />
          <TextArea loading placeholder="Normal loading textarea" />
          <TextArea
            loading
            ctrlSize="medium"
            placeholder="Medium loading textarea"
          />
          <TextArea
            loading
            ctrlSize="large"
            placeholder="Large loading textarea"
          />
        </Section>
        <Section>
          <Title size="4">Fixed Size</Title>
          <TextArea fixedSize />
        </Section>
        <Section>
          <Title size="4">Height</Title>
          <TextArea rows={10} />
        </Section>
        <Section>
          <Title size="4">Readonly</Title>
          <TextArea readOnly />
        </Section>
      </Column>
    </Columns>
  </div>
)
