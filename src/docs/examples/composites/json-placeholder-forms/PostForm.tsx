import React from 'react'
import {
  consoleSubmit,
  required,
  Section,
  Simple,
  Title,
} from '../../devfractal'

interface PostFormValues {
  readonly title: string
  readonly body: string
}

const initialPostFormValues: PostFormValues = {
  title: '',
  body: '',
}

export const PostForm: React.SFC = () => (
  <Section>
    <Title>Post Form</Title>
    <Simple.Form
      initialValues={initialPostFormValues}
      onSubmit={consoleSubmit(0)}
    >
      <Simple.Text label="Title" name="title" validations={[required()]} />
      <Simple.TextArea label="Body" name="body" />
      <Simple.FormButtons />
      <Simple.Debug />
    </Simple.Form>
  </Section>
)
