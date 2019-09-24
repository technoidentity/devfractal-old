// tslint:disable typedef
import { formComponent } from 'devfractal-crud'
import { Simple } from 'devfractal-simple'
import { Section } from 'devfractal-ui-core'
import React from 'react'
import { FSTodo } from '../common'

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
