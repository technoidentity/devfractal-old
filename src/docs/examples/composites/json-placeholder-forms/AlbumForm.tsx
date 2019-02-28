import React from 'react'
import {
  consoleSubmit,
  required,
  Section,
  Simple,
  Title,
} from '../../devfractal'

interface AlbumFormValues {
  readonly title: string
}

const initialAlbumFormValues: AlbumFormValues = {
  title: '',
}

export const AlbumForm: React.SFC = () => (
  <Section>
    <Title>Album Form</Title>
    <Simple.Form
      initialValues={initialAlbumFormValues}
      onSubmit={consoleSubmit(0)}
    >
      <Simple.Text label="Title" name="title" validations={[required()]} />
      <Simple.FormButtons />
      <Simple.Debug />
    </Simple.Form>
  </Section>
)
