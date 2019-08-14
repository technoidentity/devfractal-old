import { FormikActions } from 'formik'
import { TypeOf } from 'io-ts'
import React from 'react'
import { component, Section, Simple, Title } from 'technoidentity-devfractal'
import { empty, fn, props } from 'technoidentity-utils'
import { Evs } from '../common'

const RaiseRequestFormProps = props(
  { initial: Evs },
  {
    onSubmit: fn<(values: Evs, Actions: FormikActions<Evs>) => Promise<void>>(),
  },
)

type RaiseRequestFormProps = TypeOf<typeof RaiseRequestFormProps>

const initialValues = empty(Evs)

export const RaiseRequestForm = component(
  RaiseRequestFormProps,
  ({ initial, onSubmit }) => (
    <>
      <Title size="4" textColor="info">
        Raise Request
      </Title>
      <Section>
        <Simple.Form
          initialValues={initial || initialValues}
          onSubmit={onSubmit}
        >
          <Simple.Select
            name="addtionalEVsRequired"
            label="Additional EVs required"
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
