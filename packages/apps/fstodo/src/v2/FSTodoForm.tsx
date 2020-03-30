// tslint:disable typedef
import React from 'react'
import { formComponent } from 'technoidentity-crud'
import { Simple } from 'technoidentity-ui'
import { FSTodo } from '../common'

export const FSTodoForm = formComponent(FSTodo, ({ initial, onSubmit }) => (
  <Simple.Form onSubmit={onSubmit} initialValues={initial}>
    <Simple.Text name="title" />
    <Simple.Checkbox name="done">Done</Simple.Checkbox>
    <Simple.FormButtons />
    <Simple.Debug />
  </Simple.Form>
))
