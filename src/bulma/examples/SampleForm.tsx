import * as React from 'react'
import { Input } from '../Input'
import { TextArea } from '../TextArea'
import { CheckBox } from '../CheckBox'
import { Label } from '../Label'
import { Field } from '../Field'
import { Select } from '../Select'
import { RadioButton } from '../RadioButton'
import { Button } from '../Button'

export const SampleForm: React.SFC = () => {
  return (
    <div className="section">
      <div className="container">
        <Field>
          <Label>Name</Label>
          <Input
            name="input"
            type="text"
            placeholder="Text input"
            onChange={() => ({})}
          />
        </Field>

        <Field>
          <label className="label">Username</label>
          <div className="control has-icons-left has-icons-right">
            <Input
              name="Username"
              type="text"
              placeholder="Text input"
              value=""
              onChange={() => ({})}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user" />
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check" />
            </span>
          </div>
          <p className="help is-success">This username is available</p>
        </Field>

        <Field>
          <Label>Email</Label>
          <div className="control has-icons-left has-icons-right">
            <Input
              name="email"
              type="email"
              placeholder="Email input"
              value=""
              onChange={() => ({})}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle" />
            </span>
          </div>
        </Field>
        <p className="help is-danger">This email is invalid</p>

        <Field>
          <Label>Subject</Label>
          <Select name="foobar" onChange={() => ({})}>
            <option>Select dropdown</option>
            <option>With options</option>
          </Select>
        </Field>

        <Field>
          <Label>Message</Label>
          <TextArea placeholder="Textarea" rows={4} />
        </Field>

        <Field>
          <CheckBox name="foobar" onChange={() => ({})}>
            I agree to the
            <a href="#"> terms and conditions</a>
          </CheckBox>
        </Field>

        <Field grouped>
          <RadioButton name="foobar" onChange={() => ({})}>
            Yes
          </RadioButton>
          <RadioButton name="foobar" onChange={() => ({})}>
            No
          </RadioButton>
        </Field>

        <Field grouped>
          <Button onClick={() => ({})}>Submit</Button>

          <Button onClick={() => ({})}>Cancel</Button>
        </Field>
      </div>
    </div>
  )
}
