import {
  faCheck,
  faEnvelope,
  faExclamationTriangle,
  faGlobe,
  faLock,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {
  Button,
  CheckBox,
  Column,
  Columns,
  Field,
  FieldBody,
  FieldHelp,
  FieldLabel,
  Input,
  Label,
  Radio,
  RadioGroup,
  Section,
  Select,
  TextArea,
} from 'srtp-ui'

export const General: React.FC = () => (
  <>
    <Columns columnCentered>
      <Column size="half">
        <Section>
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
            <FieldHelp variant="success">This username is available</FieldHelp>
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
              readOnly
            />
            <FieldHelp variant="danger">This email is invalid</FieldHelp>
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
              {' '}
              I agree to the <a href="#!">terms and conditions</a>
            </CheckBox>
          </Field>
          <Field grouped>
            <RadioGroup name="terms">
              <Radio> Yes</Radio>
              <Radio> No</Radio>
            </RadioGroup>
          </Field>
          <Field grouped>
            <Button variant="success">Submit</Button>
            <Button variant="danger">Cancel</Button>
          </Field>
        </Section>

        <Section>
          <Field>
            <Label>Label</Label>
            <Input type="text" placeholder="Text input" />
            <FieldHelp>This is a help text</FieldHelp>
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
        </Section>
        <Section>
          <Field>
            <Label size="small">Small input</Label>
            <Input
              leftIcon={faEnvelope}
              rightIcon={faCheck}
              iconSize="small"
              type="email"
              placeholder="Small input"
            />
          </Field>
          <Field>
            <Label>Normal input</Label>
            <Input
              leftIcon={faEnvelope}
              rightIcon={faCheck}
              type="email"
              placeholder="Normal input"
            />
          </Field>
          <Field>
            <Input
              leftIcon={faEnvelope}
              rightIcon={faCheck}
              type="email"
              placeholder="Normal input"
            />
          </Field>
          <Field>
            <Label size="medium">Medium input</Label>
            <Input
              leftIcon={faEnvelope}
              rightIcon={faCheck}
              ctrlSize="medium"
              iconSize="small"
              type="email"
              placeholder="Medium input"
            />
          </Field>
          <Field>
            <Input
              leftIcon={faEnvelope}
              rightIcon={faCheck}
              ctrlSize="medium"
              iconSize="small"
              type="email"
              placeholder="Medium input"
            />
          </Field>
          <Field>
            <Input
              leftIcon={faEnvelope}
              rightIcon={faCheck}
              ctrlSize="medium"
              type="email"
              placeholder="Medium input"
            />
          </Field>
          <Field>
            <Label size="large">Large input</Label>
            <Input
              ctrlSize="large"
              leftIcon={faEnvelope}
              rightIcon={faCheck}
              iconSize="small"
              type="email"
              placeholder="Large input"
            />
          </Field>
          <Field>
            <Input
              leftIcon={faEnvelope}
              rightIcon={faCheck}
              iconSize="small"
              ctrlSize="large"
              type="email"
              placeholder="Large input"
            />
          </Field>
          <Field>
            <Input
              leftIcon={faEnvelope}
              rightIcon={faCheck}
              iconSize="small"
              ctrlSize="large"
              type="email"
              placeholder="Large input"
            />
          </Field>
          <Field>
            <Input
              ctrlSize="large"
              leftIcon={faEnvelope}
              rightIcon={faCheck}
              type="email"
              placeholder="Large input"
            />
          </Field>
        </Section>

        <Section>
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
              <option>Argentina</option>
              <option>Bolivia</option>
              <option>Brazil</option>
              <option>Chile</option>
              <option>Colombia</option>
              <option>Ecuador</option>
              <option>Guyana</option>
              <option>Paraguay</option>
              <option>Peru</option>
              <option>Suriname</option>
              <option>Uruguay</option>
              <option>Venezuela</option>
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
        </Section>

        <Section>
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
        </Section>

        <Section>
          <Field horizontal>
            <FieldLabel fieldLabelSize="normal">From </FieldLabel>
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
                <FieldHelp>Do not enter the first zero</FieldHelp>
              </Field>
            </FieldBody>
          </Field>

          <Field horizontal>
            <FieldLabel fieldLabelSize="normal">Department</FieldLabel>
            <FieldBody>
              <Field size="narrow">
                <Select fullWidth>
                  <option>Business development</option>
                  <option>Marketing</option>
                  <option>Sales</option>
                </Select>
              </Field>
            </FieldBody>
          </Field>

          <Field horizontal>
            <FieldLabel>Already a member? </FieldLabel>
            <FieldBody>
              <Field>
                <RadioGroup name="member">
                  <Radio> Yes</Radio>
                  <Radio> No</Radio>
                </RadioGroup>
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
            <FieldLabel fieldLabelSize="normal">Question </FieldLabel>
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
            <FieldLabel>No padding </FieldLabel>
            <FieldBody>
              <Field>
                <CheckBox> Checkbox</CheckBox>
              </Field>
            </FieldBody>
          </Field>

          <Field horizontal>
            <FieldLabel fieldLabelSize="small">Small padding</FieldLabel>
            <FieldBody>
              <Field>
                <Input
                  ctrlSize="small"
                  type="text"
                  placeholder="Small sized input"
                />
              </Field>
            </FieldBody>
          </Field>
          <Field horizontal>
            <FieldLabel fieldLabelSize="normal">Normal label </FieldLabel>
            <FieldBody>
              <Field>
                <Input type="text" placeholder="Normal sized input" />
              </Field>
            </FieldBody>
          </Field>
          <Field horizontal>
            <FieldLabel fieldLabelSize="medium">Medium label</FieldLabel>
            <FieldBody>
              <Field>
                <Input
                  ctrlSize="medium"
                  type="text"
                  placeholder="Medium sized input"
                />
              </Field>
            </FieldBody>
          </Field>

          <Field horizontal>
            <FieldLabel fieldLabelSize="large">Large label </FieldLabel>
            <FieldBody>
              <Field>
                <Input
                  ctrlSize="large"
                  type="text"
                  placeholder="Large sized input"
                />
              </Field>
            </FieldBody>
          </Field>
        </Section>
      </Column>
    </Columns>
  </>
)
