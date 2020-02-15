import React from 'react'
import {
  component,
  formProps,
  Section,
  Simple,
} from 'technoidentity-devfractal'
import { empty } from 'technoidentity-utils'
import { Ev } from '../common'
import { HeadTitle } from '../components'

const RaiseRequestFormProps = formProps(Ev)

export const RaiseRequestForm = component(
  RaiseRequestFormProps,
  ({ initial = empty(Ev), onSubmit }) => (
    <>
      <HeadTitle>Raise Request</HeadTitle>

      <Section>
        <Simple.Form initialValues={initial} onSubmit={onSubmit}>
          <Simple.Select
            name="additionalEvRequired"
            label="Additional Ev required"
          >
            <option>select</option>
          </Simple.Select>

          <Simple.Select name="frequency">
            <option value="once">Once</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">yearly</option>
          </Simple.Select>

          <Simple.FormButtons />
        </Simple.Form>
      </Section>
    </>
  ),
)
