import React from 'react'

import {
  Button,
  Input,
  RadioButton,
  Select,
  TextArea,
  Field,
  FieldBody,
  FieldLabel,
  FieldHelp,
} from '../form'

import { Section } from '../layout'

export const FieldExample: React.SFC = () => (
  <div>
    <Field horizontal>
      <FieldLabel fieldLabelSize="normal">From</FieldLabel>
      <FieldBody>
        <Field>
          <Input type="text" placeholder="Name" />
        </Field>
        <Field>
          <Input
            variant="success"
            type="email"
            placeholder="Email"
            value="alex@smith.com"
            readOnly
          />
        </Field>
      </FieldBody>
    </Field>

    <Field horizontal>
      <FieldLabel />
      <FieldBody>
        <Field size="expanded">
          <Field addons addonsModifier="addons-centered">
            <Button state="static">+44</Button>
            <Input type="tel" placeholder="Your phone number" expanded />
          </Field>
          <FieldHelp>Do not enter the first zero</FieldHelp>
        </Field>
      </FieldBody>
    </Field>

    <Field horizontal>
      <FieldLabel fieldLabelSize="normal">Department</FieldLabel>
      <FieldBody>
        <Field size="narrow">
          <Select>
            <option>Business development</option>
            <option>Marketing</option>
            <option>Sales</option>
          </Select>
        </Field>
      </FieldBody>
    </Field>

    <Field horizontal>
      <FieldLabel>Already a member</FieldLabel>
      <FieldBody>
        <Field>
          <RadioButton>Yes</RadioButton>
          <RadioButton>No</RadioButton>
        </Field>
      </FieldBody>
    </Field>

    <Field horizontal>
      <FieldLabel fieldLabelSize="normal">Subject</FieldLabel>
      <FieldBody>
        <Field>
          <Input
            variant="danger"
            type="text"
            placeholder="e.g. Partnership opportunity"
          />
          <FieldHelp variant="danger">This field is required</FieldHelp>
        </Field>
      </FieldBody>
    </Field>

    <Field horizontal>
      <FieldLabel fieldLabelSize="normal">Question</FieldLabel>
      <FieldBody>
        <Field>
          <TextArea placeholder="Explain how we can help you" />
        </Field>
      </FieldBody>
    </Field>

    <Field horizontal>
      <FieldLabel />
      <FieldBody>
        <Field>
          <Button variant="primary">Send message</Button>
        </Field>
      </FieldBody>
    </Field>

    <Section>
      <Field addonsModifier="addons-centered">
        <Select>
          <option>$</option>
          <option>£</option>
          <option>€</option>
        </Select>
        <Input type="text" placeholder="Amount of money" />
        <Button variant="primary">Transfer</Button>
      </Field>
    </Section>

    <Section>
      <Field groupModifier="grouped-centered">
        <Button variant="primary">Submit</Button>
        <Button variant="light">Cancel</Button>
      </Field>
    </Section>
  </div>
)
