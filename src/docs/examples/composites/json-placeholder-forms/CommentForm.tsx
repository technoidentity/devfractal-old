import React from 'react'
import {
  consoleSubmit,
  email,
  max,
  min,
  required,
  Section,
  Simple,
  Title,
} from '../../devfractal'

interface CommentFormValues {
  readonly name: string
  readonly email: string
  readonly body: string
}

const initialCommentFormValues: CommentFormValues = {
  name: '',
  email: '',
  body: '',
}

export const CommentForm: React.SFC = () => (
  <Section>
    <Title>Comment Form</Title>
    <Simple.Form
      initialValues={initialCommentFormValues}
      onSubmit={consoleSubmit(0)}
    >
      <Simple.Text
        label="Name"
        name="name"
        validations={[required(), min(6), max(20)]}
      />
      <Simple.Email
        label="Email"
        name="email"
        validations={[required(), email()]}
      />
      <Simple.TextArea label="Body" name="body" />
      <Simple.FormButtons />
      <Simple.Debug />
    </Simple.Form>
  </Section>
)
