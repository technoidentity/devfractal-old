import * as React from 'react'
import { Button, Field, FieldBody, FieldLabel, Input, Section } from '../../lib'
import { AccountFormPropType, StepItemComponent } from '../step'

export const AccountForm: ({
  initialValues,
  nextClick,
  onInputChange,
}: AccountFormPropType) => JSX.Element = ({
  initialValues,
  nextClick,
  onInputChange,
}: AccountFormPropType) => (
  <Section>
    <Section>
      <StepItemComponent activePage={1} />
      <Section textAlignment="centered">
        <Field horizontal>
          <FieldLabel fieldLabelSize="normal">Username</FieldLabel>
          <FieldBody>
            <Field>
              <Input
                name="userName"
                id="username"
                type="text"
                placeholder="Username"
                data-validate="require"
                onChange={e => {
                  e.persist()
                  onInputChange(e)
                }}
                value={initialValues.userName}
              />
            </Field>
          </FieldBody>
        </Field>
        <Field horizontal>
          <FieldLabel fieldLabelSize="normal">Password</FieldLabel>
          <FieldBody>
            <Field>
              <Input
                name="password"
                id="password"
                type="password"
                placeholder="Password"
                data-validate="require"
                onChange={e => {
                  e.persist()
                  onInputChange(e)
                }}
                value={initialValues.password}
              />
            </Field>
          </FieldBody>
        </Field>
        <Field horizontal>
          <FieldLabel fieldLabelSize="normal">Confirm Password</FieldLabel>
          <FieldBody>
            <Field>
              <Input
                name="confirmPassword"
                id="confirmPassword"
                type="password"
                placeholder="ConfirmPassword"
                data-validate="require"
                onChange={e => {
                  e.persist()
                  onInputChange(e)
                }}
                value={initialValues.confirmPassword}
              />
            </Field>
          </FieldBody>
        </Field>
      </Section>
    </Section>
    <Field groupModifier="grouped-centered">
      <Button state="static">Previous</Button>
      <Button
        variant="light"
        onClick={e => {
          e.persist()
          nextClick(initialValues)
        }}
      >
        Next
      </Button>
    </Field>
  </Section>
)
