import React from 'react'
import {
  consoleSubmit,
  required,
  Section,
  Simple,
  Title,
  url,
} from '../../devfractal'

interface PhotoFormValues {
  readonly title: string
  readonly url: string
  readonly thumbnailUrl: string
}

const initialPhotoFormValues: PhotoFormValues = {
  title: '',
  url: '',
  thumbnailUrl: '',
}

export const PhotoForm: React.SFC = () => (
  <Section>
    <Title>Photo Form</Title>
    <Simple.Form
      initialValues={initialPhotoFormValues}
      onSubmit={consoleSubmit(0)}
    >
      <Simple.Text label="Title" name="title" validations={[required()]} />
      <Simple.Url label="Url" name="url" validations={[required(), url()]} />
      <Simple.Url
        label="ThumbNailUrl"
        name="thumbnailUrl"
        validations={[required(), url()]}
      />
      <Simple.FormButtons />
      <Simple.Debug />
    </Simple.Form>
  </Section>
)
