import React from 'react'
import { component } from 'technoidentity-core'
import { Create, SubmitAction } from 'technoidentity-crud'
import { Column, Columns, Section, Simple, Title } from 'technoidentity-ui'
import { empty, fn, req } from 'technoidentity-utils'
import { AssignDriver, assignDriverAPI } from '../common'

const AssignDriverFormProps = req({
  onSubmit: fn<SubmitAction<AssignDriver>>(),
})

export const AssignDriverForm = component(
  AssignDriverFormProps,
  ({ onSubmit }) => (
    <Section>
      <Columns columnCentered>
        <Column size="half">
          <Title size="5">Assign</Title>

          <Simple.Form initialValues={empty(AssignDriver)} onSubmit={onSubmit}>
            <Simple.Select name="vehicleNumber">
              <option value="number1">TSO1A0428</option>
              <option value="number2">TSO1A0429</option>
            </Simple.Select>

            <Simple.Text name="batteryId" />
            <Simple.Text name="client" />

            <Simple.FormButtons />
          </Simple.Form>
        </Column>
      </Columns>
    </Section>
  ),
)

export const AssignDriverRoute = () => (
  <Create
    api={assignDriverAPI}
    form={AssignDriverForm}
    path="/assignDriver/:id"
    redirectTo="/drivers"
  />
)
