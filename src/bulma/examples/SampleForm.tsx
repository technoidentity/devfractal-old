import React from 'react'
import { Button } from '../form/Button'
import { CheckBox } from '../form/CheckBox'
import { Field } from '../form/Field'
import { Input } from '../form/Input'
import { Label } from '../form/Label'
import { RadioButton } from '../form/RadioButton'
import { Select } from '../form/Select'
import { TextArea } from '../form/TextArea'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'

export const SampleForm: React.SFC = () => {
  return (
    <Section>
      <Container>
        <Field>
          <Label>Name</Label>
          <Input type="text" placeholder="Input Text" />
        </Field>
        <Field>
          <Label>Username</Label>
          <Input type="text" placeholder="Input Text" />
          <p className="help is-success">This username is available</p>
        </Field>

        <Field>
          <Label>Email</Label>
          <Input type="email" placeholder="Email Input" />
        </Field>
        <p className="help is-danger">This email is invalid</p>

        <Field>
          <Label>Subject</Label>
          <Select>
            <option>Select dropdown</option>
            <option>With options</option>
          </Select>
        </Field>

        <Field>
          <Label>Message</Label>
          <TextArea placeholder="Textarea" rows={4} />
        </Field>

        <Field>
          <CheckBox>
            I agree to the
            <a href="#"> terms and conditions</a>
          </CheckBox>
        </Field>

        <Field className="is-grouped">
          <RadioButton name="foobar" onChange={() => ({})}>
            Yes
          </RadioButton>
          <RadioButton name="foobar" onChange={() => ({})}>
            No
          </RadioButton>
        </Field>

        <Field className="is-grouped">
          <Button>Submit</Button>

          <Button>Cancel</Button>
        </Field>
      </Container>
    </Section>
  )
}
