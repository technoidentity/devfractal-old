import { FormikActions } from 'formik'
import React from 'react'
import {
  component,
  Label,
  Section,
  Simple,
  Title,
} from 'technoidentity-devfractal'
import { empty, fn, props } from 'technoidentity-utils'
import { User } from '../common'

export const CreateUserFormProps = props(
  {
    initial: User,
  },
  {
    onSubmit: fn<
      (values: User, actions: FormikActions<User>) => Promise<void>
    >(),
  },
)

const initialValues = empty(User)

export const UserForm = component(
  CreateUserFormProps,
  ({ initial, onSubmit }) => (
    <>
      <Section>
        <Title size="4" textColor="info">
          Add User
        </Title>
      </Section>
      <Section>
        <Simple.Form
          initialValues={initial || initialValues}
          onSubmit={onSubmit}
        >
          <Simple.Text name="userName" />
          <Label>Role</Label>
          <Simple.Select name="Admin">
            <option value="Admin">Admin</option>
            <option value="Reporter">Reporter</option>
            <option value="Dispatcher">Dispatcher</option>
          </Simple.Select>
          <Simple.FormButtons />
        </Simple.Form>
      </Section>
    </>
  ),
)
