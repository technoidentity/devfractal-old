import * as React from 'react'
import { Button, Field, FieldBody, FieldLabel, Input, Section } from '../../lib'
import { ProfileFormPropType, StepItemComponent } from '../step'

export const ProfileForm: ({
  initialValues,
  accountValues,
  nextClick,
  prevClick,
  onInputChange,
}: ProfileFormPropType) => JSX.Element = ({
  initialValues,
  accountValues,
  nextClick,
  prevClick,
  onInputChange,
}: ProfileFormPropType) => (
  <Section>
    <Section>
      <StepItemComponent activePage={2} />
      <Section textAlignment="centered" className="is-active">
        <Field horizontal>
          <FieldLabel fieldLabelSize="normal">FirstName</FieldLabel>
          <FieldBody>
            <Field>
              <Input
                name="firstName"
                id="firstName"
                type="text"
                placeholder="FirstName"
                data-validate="require"
                onChange={e => {
                  e.persist()
                  onInputChange(e)
                }}
                value={initialValues.firstName}
              />
            </Field>
          </FieldBody>
        </Field>
        <Field horizontal>
          <FieldLabel fieldLabelSize="normal">LastName</FieldLabel>
          <FieldBody>
            <Field>
              <Input
                name="lastName"
                id="lastName"
                type="text"
                placeholder="LastName"
                data-validate="require"
                onChange={e => {
                  e.persist()
                  onInputChange(e)
                }}
                value={initialValues.lastName}
              />
            </Field>
          </FieldBody>
        </Field>
        <Field horizontal>
          <FieldLabel fieldLabelSize="normal">Email</FieldLabel>
          <FieldBody>
            <Field>
              <Input
                name="email"
                id="email"
                type="text"
                placeholder="Email"
                data-validate="require"
                onChange={e => {
                  e.persist()
                  onInputChange(e)
                }}
                value={initialValues.email}
              />
            </Field>
          </FieldBody>
        </Field>
      </Section>
    </Section>
    <Field groupModifier="grouped-centered">
      <Button
        variant="light"
        onClick={e => {
          e.persist()
          prevClick(accountValues)
        }}
      >
        Previous
      </Button>
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
