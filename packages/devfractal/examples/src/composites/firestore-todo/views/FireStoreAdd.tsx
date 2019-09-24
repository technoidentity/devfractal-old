// tslint:disable typedef
import { formComponent } from 'devfractal-crud'
import { Simple } from 'devfractal-simple'
import { useSubmitRedirect } from 'devfractal-ui-api'
import { Section } from 'devfractal-ui-core'
import React from 'react'
import { FSTodo, fsTodoAPI } from '../todoAPI'

export const FSAddFormView = formComponent(FSTodo, ({ initial, onSubmit }) => (
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
  // tslint:disable-next-line: no-unbound-method
  const { onSubmit } = useSubmitRedirect(fsTodoAPI.create, '/list')
  return <FSAddFormView onSubmit={onSubmit} />
}
