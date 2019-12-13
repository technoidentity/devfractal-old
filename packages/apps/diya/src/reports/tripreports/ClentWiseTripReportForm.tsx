import {
  Button,
  Column,
  Columns,
  Container,
  Field,
  Label,
  Section,
  Select,
  Text,
} from 'devfractal-ui-core'
import React from 'react'

export const ClientWiseReport: React.FC = () => (
  <Section>
    <Container>
      <Columns columnCentered>
        <Column size="half">
          <Text alignment="centered" weight="bold">
            Client wise Trip report
          </Text>
          <hr />
          <Field>
            <Label>Select Client</Label>
            <Select>
              <option value="select client">select client</option>
              <option value="ecart">ecart</option>
            </Select>
          </Field>
          <Field>
            <Label>SelectLocation</Label>
            <Select state="hovered">
              <option value="select location"> select location</option>
              <option value="Jntu">JNTU</option>
            </Select>
          </Field>
          <Field className="is-grouped">
            <Button variant="success">Save</Button>
            <Button variant="danger">Cancel</Button>
          </Field>
        </Column>
      </Columns>
    </Container>
  </Section>
)
