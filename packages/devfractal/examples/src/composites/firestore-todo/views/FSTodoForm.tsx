// tslint:disable typedef
import { formComponent } from 'devfractal-crud'
import { Simple } from 'devfractal-simple'
import { useSubmitRedirect } from 'devfractal-ui-api'
import { Section } from 'devfractal-ui-core'
import React from 'react'
import { FSTodo, fsTodoAPI } from '../todoAPI'

export const FSTodoForm = formComponent(FSTodo, ({ initial, onSubmit }) => (
  <Section>
    <Simple.Form onSubmit={onSubmit} initialValues={initial}>
      <Simple.Text name="title" />
      <Simple.Checkbox name="done">Done</Simple.Checkbox>
      <Simple.FormButtons />
      <Simple.Debug />
    </Simple.Form>
  </Section>
))

export const FSAddForm: React.FC = () => {
  const { onSubmit } = useSubmitRedirect(fsTodoAPI.create, '/list')

  return <FSTodoForm onSubmit={onSubmit} />
}
