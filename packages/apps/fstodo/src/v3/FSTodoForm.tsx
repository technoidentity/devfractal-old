// tslint:disable typedef
import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { formComponent } from 'technoidentity-crud'
import { Simple } from 'technoidentity-ui'
import { FSTodo } from '../common'

export const FSTodoForm = formComponent(FSTodo, ({ initial, onSubmit }) => (
  <Simple.Form onSubmit={onSubmit} initialValues={initial}>
    <Simple.Text name="title" />
    <Simple.Checkbox name="done">Done</Simple.Checkbox>
    <Simple.Date name="completed" />
    <Simple.FormButtons />
    <Simple.Debug />
  </Simple.Form>
))
