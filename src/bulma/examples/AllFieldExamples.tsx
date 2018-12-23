import * as React from 'react'

import {
  Field,
  Label,
  Input,
  Select,
  TextArea,
  CheckBox,
  RadioButton,
  Button,
} from '../form'

import {
  faUser,
  faCheck,
  faExclamationTriangle,
  faEnvelope,
  faLock,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons'

import { FieldLabel, FieldBody } from '../form'

import { Section } from '../layout'

export const AllFieldExamples: React.SFC = () => (
  <>
    <Field>
      <Label>Name</Label>
      <Input type="text" placeholder="Text input" />
    </Field>
    <Field>
      <Label>Username</Label>
      <Input
        leftIcon={faUser}
        rightIcon={faCheck}
        iconSize="small"
        type="text"
        placeholder="Text input"
      />
      <p className="help is-success">This username is available</p>
    </Field>
    <Field>
      <Label>Email</Label>
      <Input
        leftIcon={faEnvelope}
        rightIcon={faExclamationTriangle}
        iconSize="small"
        type="email"
        placeholder="Email input"
        value="hello@"
      />
      <p className="help is-danger">This email is invalid</p>
    </Field>
    <Field>
      <Label>Subject</Label>
      <Select>
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
    <Field>
      <Label>Message</Label>
      <TextArea placeholder="Textarea" />
    </Field>
    <Field>
      <CheckBox>
        I agree to the <a href="#">terms and conditions</a>
      </CheckBox>
    </Field>
    <Field grouped>
      <RadioButton>Yes</RadioButton>
      <RadioButton>No</RadioButton>
    </Field>
    <Field grouped>
      <Button variant="success">Submit</Button>
      <Button variant="danger">Cancel</Button>
    </Field>
    <Field>
      <Label>Label</Label>
      <Input type="text" placeholder="Text input" />
      <p className="help">This is a help text</p>
    </Field>
    <Field>
      <Select>
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
    <Field>
      <Input
        iconSize="small"
        leftIcon={faEnvelope}
        rightIcon={faCheck}
        type="email"
        placeholder="Email"
      />
    </Field>
    <Field>
      <Input
        leftIcon={faLock}
        iconSize="small"
        type="password"
        placeholder="Password"
      />
    </Field>
    <Field>
      <Button color="success">Login</Button>
    </Field>
    <Field>
      <Select leftIcon={faGlobe} iconSize="small">
        <option>Country</option>
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
    <Field>
      <Label size="small">Small input</Label>
      <Input
        leftIcon={faEnvelope}
        rightIcon={faCheck}
        iconSize="small"
        type="email"
        placeholder="Normal"
      />
    </Field>
    <Field>
      <Label>Normal input</Label>
      <Input
        leftIcon={faEnvelope}
        rightIcon={faCheck}
        type="email"
        placeholder="Extra small"
      />
    </Field>
    <Field>
      <Input
        leftIcon={faEnvelope}
        rightIcon={faCheck}
        type="email"
        placeholder="Normal"
      />
    </Field>
    <Field>
      <Label size="medium">Medium input</Label>
      <Input
        leftIcon={faEnvelope}
        rightIcon={faCheck}
        controlSize="medium"
        iconSize="small"
        type="email"
        placeholder="Extra small"
      />
    </Field>
    <Field>
      <Input
        leftIcon={faEnvelope}
        rightIcon={faCheck}
        controlSize="medium"
        iconSize="small"
        type="email"
        placeholder="Small"
      />
    </Field>
    <Field>
      <Input
        leftIcon={faEnvelope}
        rightIcon={faCheck}
        controlSize="medium"
        type="email"
        placeholder="Normal"
      />
    </Field>
    <Field>
      <Label size="large">Large input</Label>
      <Input
        controlSize="large"
        leftIcon={faEnvelope}
        rightIcon={faCheck}
        iconSize="small"
        type="email"
        placeholder="Extra small"
      />
    </Field>
    <Field>
      <Input
        leftIcon={faEnvelope}
        rightIcon={faCheck}
        iconSize="small"
        controlSize="large"
        type="email"
        placeholder="Small"
      />
    </Field>
    <Field>
      <Input
        leftIcon={faEnvelope}
        rightIcon={faCheck}
        iconSize="small"
        controlSize="large"
        type="email"
        placeholder="Normal"
      />
    </Field>
    <Field>
      <Input
        controlSize="large"
        leftIcon={faEnvelope}
        rightIcon={faCheck}
        type="email"
        placeholder="Large"
      />
    </Field>
    <Field addons>
      <Input type="text" placeholder="Find a repository" expanded />
      <Button variant="info"> Search</Button>
    </Field>
    <Field addons>
      <Input type="text" placeholder="Your email" />
      <Button state="static">@gmail.com</Button>
    </Field>
    <Field addons>
      <Select>
        <option>$</option>
        <option>£</option>
        <option>€</option>
      </Select>
      <Input type="text" placeholder="Amount of money" />
      <Button>Transfer</Button>
    </Field>

    <Field addons>
      <Select>
        <option>$</option>
        <option>£</option>
        <option>€</option>
      </Select>
      <Input type="text" placeholder="Amount of money" expanded />
      <Button>Transfer</Button>
    </Field>
    <Field addons>
      <Select name="country" fullWidth expanded>
        <option value="Argentina">Argentina</option>
        <option value="Bolivia">Bolivia</option>
        <option value="Brazil">Brazil</option>
        <option value="Chile">Chile</option>
        <option value="Colombia">Colombia</option>
        <option value="Ecuador">Ecuador</option>
        <option value="Guyana">Guyana</option>
        <option value="Paraguay">Paraguay</option>
        <option value="Peru">Peru</option>
        <option value="Suriname">Suriname</option>
        <option value="Uruguay">Uruguay</option>
        <option value="Venezuela">Venezuela</option>
      </Select>
      <Button type="submit" variant="primary">
        Choose
      </Button>
    </Field>
    <Field addons addonsModifier="addons-centered">
      <Select>
        <option>$</option>
        <option>£</option>
        <option>€</option>
      </Select>
      <Input type="text" placeholder="Amount of money" />
      <Button variant="primary">Transfer</Button>
    </Field>
    <Field addons addonsModifier="addons-right">
      <Select>
        <option>$</option>
        <option>£</option>
        <option>€</option>
      </Select>
      <Input type="text" placeholder="Amount of money" />
      <Button variant="primary">Transfer</Button>
    </Field>
    <Field grouped>
      <Button variant="primary">Submit</Button>
      <Button variant="light">Cancel</Button>
    </Field>
    <Field grouped groupModifier="grouped-centered">
      <Button variant="primary">Submit</Button>
      <Button variant="light">Cancel</Button>
    </Field>
    <Field grouped groupModifier="grouped-right">
      <Button variant="primary">Submit</Button>
      <Button variant="light">Cancel</Button>
    </Field>
    <Field grouped>
      <Input type="text" placeholder="Find a repository" expanded />
      <Button variant="info">Search</Button>
    </Field>
    <Field grouped groupedMultiline>
      <Button>One</Button>
      <Button>two</Button>
      <Button>three</Button>
      <Button>four</Button>
      <Button>five</Button>
      <Button>six</Button>
      <Button>seven</Button>
      <Button>eight</Button>
      <Button>nine</Button>
      <Button>ten</Button>
      <Button>eleven</Button>
      <Button>twelve</Button>
      <Button>thirteen</Button>
    </Field>
    <Field horizontal>
      <FieldLabel fieldLabelSize="normal">
        <Label>From</Label>
      </FieldLabel>
      <FieldBody>
        <Field>
          <Input
            leftIcon={faUser}
            iconSize="small"
            type="text"
            placeholder="Name"
          />
        </Field>
        <Field>
          <Input
            leftIcon={faEnvelope}
            rightIcon={faCheck}
            iconSize="small"
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
        <Field size="expanded">
          <Field addons>
            <Button state="static">+44</Button>
            <Input type="tel" placeholder="Your phone number" />
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
        <Field size="narrow">
          <Select className="is-fullwidth">
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
    <Field horizontal>
      <FieldLabel>
        <Label>No padding</Label>
      </FieldLabel>
      <FieldBody>
        <Field>
          <CheckBox> Checkbox</CheckBox>
        </Field>
      </FieldBody>
    </Field>

    <Field horizontal>
      <FieldLabel fieldLabelSize="small">
        <Label>Small padding</Label>
      </FieldLabel>
      <FieldBody>
        <Field>
          <Input
            controlSize="small"
            type="text"
            placeholder="Small sized input"
          />
        </Field>
      </FieldBody>
    </Field>
    <Field horizontal>
      <FieldLabel fieldLabelSize="normal">
        <Label>Normal label</Label>
      </FieldLabel>
      <FieldBody>
        <Field>
          <Input type="text" placeholder="Normal sized input" />
        </Field>
      </FieldBody>
    </Field>
    <Field horizontal>
      <FieldLabel fieldLabelSize="medium">
        <Label>Medium label</Label>
      </FieldLabel>
      <FieldBody>
        <Field>
          <Input
            controlSize="medium"
            type="text"
            placeholder="Medium sized input"
          />
        </Field>
      </FieldBody>
    </Field>

    <Field horizontal>
      <FieldLabel fieldLabelSize="large">
        <Label>Large label</Label>
      </FieldLabel>
      <FieldBody>
        <Field>
          <Input
            controlSize="large"
            type="text"
            placeholder="Large sized input"
          />
        </Field>
      </FieldBody>
    </Field>
  </>
)
