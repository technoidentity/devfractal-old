import { TypeOf } from 'io-ts'
import React from 'react'
import { component, Section, Simple } from 'technoidentity-devfractal'
import { empty } from 'technoidentity-utils'
import { formProps, User } from '../common'
import { HeadTitle } from '../components'

export const UserFormProps = formProps(User)

export type UserFormProps = TypeOf<typeof UserFormProps>

export const UserForm = component(
  UserFormProps,
  ({ initial = empty(User), onSubmit }) => (
    <>
      <HeadTitle>Add User</HeadTitle>

      <Section>
        <Simple.Form initialValues={initial} onSubmit={onSubmit}>
          <Simple.Text name="userName" />

          <Simple.Select name="role">
            <option value="Admin">Admin</option>
            <option value="Reporter">Reporter</option>
            <option value="Dispatcher">Dispatcher</option>
          </Simple.Select>

          <Simple.FormButtons alignment="centered" size="medium" />
        </Simple.Form>
      </Section>
    </>
  ),
)
