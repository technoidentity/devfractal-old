// tslint:disable typedef
import { formComponent } from 'devfractal-crud'
import { Simple } from 'devfractal-simple'
import React from 'react'
import { FSTodo } from '../common'
import 'react-datepicker/dist/react-datepicker.css'

export const FSTodoForm = formComponent(FSTodo, ({ initial, onSubmit }) => (
  <Simple.Form onSubmit={onSubmit} initialValues={initial}>
    <Simple.Text name="title" />
    <Simple.Checkbox name="done">Done</Simple.Checkbox>
    <Simple.Date name="completed" />
    <Simple.FormButtons />
    <Simple.Debug />
  </Simple.Form>
))