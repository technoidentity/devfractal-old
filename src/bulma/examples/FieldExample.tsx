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
          />
        </Field>
      </FieldBody>
    </Field>

    <Field horizontal>
      <FieldLabel />
      <FieldBody>
        <Field fieldSize="expanded">
          <Field addons addonsModifier="addons-centered">
            <p className="control">
              <Button state="static">+44</Button>
            </p>
            <p className="control is-expanded">
              <Input type="tel" placeholder="Your phone number" />
            </p>
          </Field>
          <p className="help">Do not enter the first zero</p>
        </Field>
      </FieldBody>
    </Field>

    <Field horizontal>
      <FieldLabel fieldLabelSize="normal">
        <Label>Department</Label>
      </FieldLabel>
      <FieldBody>
        <Field fieldSize="narrow">
          <div className="control">
            <Select className="is-fullwidth">
              <option>Business development</option>
              <option>Marketing</option>
              <option>Sales</option>
            </Select>
          </div>
        </Field>
      </FieldBody>
    </Field>

    <Field horizontal>
      <FieldLabel>
        <Label>Already a member?</Label>
      </FieldLabel>
      <FieldBody>
        <Field>
          <div className="control">
            <RadioButton>Yes</RadioButton>
            <RadioButton>No</RadioButton>
          </div>
        </Field>
      </FieldBody>
    </Field>

    <Field horizontal>
      <FieldLabel fieldLabelSize="normal">
        <Label>Subject</Label>
      </FieldLabel>
      <FieldBody>
        <Field>
          <div className="control">
            <Input
              variant="danger"
              type="text"
              placeholder="e.g. Partnership opportunity"
            />
          </div>
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
          <div className="control">
            <TextArea placeholder="Explain how we can help you" />
          </div>
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
        <p className="control">
          <Select>
            <option>$</option>
            <option>£</option>
            <option>€</option>
          </Select>
        </p>
        <p className="control">
          <Input type="text" placeholder="Amount of money" />
        </p>
        <p className="control">
          <Button variant="primary">Transfer</Button>
        </p>
      </Field>
    </Section>

    <Section>
      <Field groupModifier="grouped-centered">
        <p className="control">
          <Button variant="primary">Submit</Button>
        </p>
        <p className="control">
          <Button variant="light">Cancel</Button>
        </p>
      </Field>
    </Section>
  </div>
)
