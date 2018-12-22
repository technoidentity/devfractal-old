import * as React from 'react'
import { Field, FieldLabel, FieldBody } from '../form/Field'
import { Input } from '../form/Input'
import { Button } from '../form/Button'
import { TextArea } from '../form/TextArea'
import { Label } from '../form/Label'
import { Select } from '../form/Select'
import { RadioButton } from '../form/RadioButton'
import { Section } from '../layout/Section'

export const FieldExample: React.SFC = () => (
  <div>
    <Field horizontal>
      <FieldLabel fieldLabelSize="normal">
        <Label>From</Label>
      </FieldLabel>
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
        <Field fieldSize="expanded">
          <Field addons addonsModifier="addons-centered">
            <Button state="static">+44</Button>
            <div className="control is-expanded">
              <Input type="tel" placeholder="Your phone number" />
            </div>
          </Field>
          <div className="help">Do not enter the first zero</div>
        </Field>
      </FieldBody>
    </Field>

    <Field horizontal>
      <FieldLabel fieldLabelSize="normal">
        <Label>Department</Label>
      </FieldLabel>
      <FieldBody>
        <Field fieldSize="narrow">
          <Select>
            <option>Business development</option>
            <option>Marketing</option>
            <option>Sales</option>
          </Select>
        </Field>
      </FieldBody>
    </Field>

    <Field horizontal>
      <FieldLabel>
        <Label>Already a member?</Label>
      </FieldLabel>
      <FieldBody>
        <Field>
          <RadioButton>Yes</RadioButton>
          <RadioButton>No</RadioButton>
        </Field>
      </FieldBody>
    </Field>

    <Field horizontal>
      <FieldLabel fieldLabelSize="normal">
        <Label>Subject</Label>
      </FieldLabel>
      <FieldBody>
        <Field>
          <Input
            variant="danger"
            type="text"
            placeholder="e.g. Partnership opportunity"
          />
          <p className="help is-danger">This field is required</p>
        </Field>
      </FieldBody>
    </Field>

    <Field horizontal>
      <FieldLabel fieldLabelSize="normal">
        <Label>Question</Label>
      </FieldLabel>
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
          <div className="control">
            <Button variant="primary">Send message</Button>
          </div>
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
