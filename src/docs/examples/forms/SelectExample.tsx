import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Value } from 'react-powerplug'
import {
  Column,
  Columns,
  Field,
  Section,
  Select,
  Text,
  Title,
} from '../devfractal'

export const DynamicSelect: React.SFC = () => (
  <Value initial={{ color: 'red' }}>
    {({ value, set }) => (
      <>
        <Title size="4">Dynamic Select({value.color})</Title>
        <Select
          name="color"
          value={value.color}
          onChange={evt => {
            set({ color: evt.target.value })
          }}
        >
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="violet">Violet</option>
        </Select>
      </>
    )}
  </Value>
)

export const SelectExample: React.SFC = () => (
  <div>
    <Columns columnCentered>
      <Column size="half">
        <Section>
          <Field>
            <DynamicSelect />
          </Field>
        </Section>
        <Section>
          <Field>
            <Title size="4">Colors</Title>
            <Select variant="primary">
              <option>Primary dropdown</option>
              <option>With options</option>
            </Select>
          </Field>
          <Field>
            <Select variant="info">
              <option>Info dropdown</option>
              <option>With options</option>
            </Select>
          </Field>
          <Field>
            <Select variant="success">
              <option>Success dropdown</option>
              <option>With options</option>
            </Select>
          </Field>
          <Field>
            <Select variant="warning">
              <option>Warning dropdown</option>
              <option>With options</option>
            </Select>
          </Field>
          <Field>
            <Select variant="danger">
              <option>Danger dropdown</option>
              <option>With options</option>
            </Select>
          </Field>
        </Section>
        <Section>
          <Field>
            <Title size="4">Sizes</Title>
            <Select ctrlSize="small">
              <option>Small dropdown</option>
              <option>With options</option>
            </Select>
          </Field>
          <Field>
            <Select ctrlSize="medium">
              <option>Medium dropdown</option>
              <option>With options</option>
            </Select>
          </Field>
          <Field>
            <Select ctrlSize="large">
              <option>Large dropdown</option>
              <option>With options</option>
            </Select>
          </Field>
          <Field>
            <Select>
              <option>Normal dropdown</option>
              <option>With options</option>
            </Select>
          </Field>
        </Section>
        <Section>
          <Field>
            <Title size="4">Style</Title>
            <Select rounded>
              <option>Rounded dropdown</option>
              <option>With options</option>
            </Select>
          </Field>
        </Section>
        <Section>
          <Field>
            <Title size="4">States</Title>
            <Field>
              <Text>Normal</Text>
              <Select state="focused">
                <option>Normal dropdown</option>
                <option>With options</option>
              </Select>
            </Field>
            <Text>Hover</Text>
            <Select state="hovered">
              <option>Hover dropdown</option>
              <option>With options</option>
            </Select>
          </Field>
          <Field>
            <Text>Focus</Text>
            <Select state="focused">
              <option>Focus dropdown</option>
              <option>With options</option>
            </Select>
          </Field>
          <Field>
            <Text>Loading</Text>
            <Select loading>
              <option>Loading dropdown</option>
              <option>With options</option>
            </Select>
          </Field>
        </Section>
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
      </Column>
    </Columns>
  </div>
)
