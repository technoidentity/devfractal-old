import * as t from 'io-ts'
import React from 'react'
import { emptyFromType } from '../../../../devfractal/src/utils/empty'
import { typeInvariant } from '../../../../devfractal/src/utils/iotsUtils'
import {
  consoleSubmit,
  required,
  Section,
  Simple,
  Title,
} from '../../devfractal'

// tslint:disable typedef

const AlbumRT = t.readonly(t.type({ title: t.string }))

type AlbumValues = t.TypeOf<typeof AlbumRT>

const initialValues: AlbumValues = emptyFromType(AlbumRT)
console.log(initialValues)
export const AlbumForm: React.SFC = () => (
  <Section>
    <Title>Album Form</Title>
    <Simple.Form
      initialValues={initialValues}
      onSubmit={(values: AlbumValues) => {
        typeInvariant(AlbumRT, values)
        consoleSubmit(0)
      }}
    >
      <Simple.Number label="Title" name="title" validations={[required()]} />
      <Simple.FormButtons />
      <Simple.Debug />
    </Simple.Form>
  </Section>
)
